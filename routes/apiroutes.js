const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const shortid = require("shortid");
let db = require("../db/db.json")

router.get("/api/notes", (req, res)=>{
    res.json(db);
});
router.post("/api/notes", (req, res)=>{
    let newNote = {
        id: shortid.generate(),
        title: req.body.title,
        text: req.body.text,
    };
    db.push(newNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db));
    res.json(db);
});

//create delete route

router.delete("/api/notes/:id", (req, res)=>{
    db = db.filter((note)=> note.id !== req.params.id);
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(db), error =>{
        if (error) throw error;
        res.sendStatus(200);
    });
})

module.exports = router;
