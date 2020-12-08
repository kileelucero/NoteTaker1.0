const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//Set Static Folder
app.use(express.static('public'));
//Api Route
app.use(require("./routes/apiroutes"));
//Html Route
app.use(require("./routes/htmlroutes"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});