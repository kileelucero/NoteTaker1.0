const express = require('express')
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoute = require('./routes/apiroutes.js')
const htmlRoute = require('./routes/htmlroutes.js')

//Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Api Route
app.use('/api', apiRoute);
//Html Route
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});