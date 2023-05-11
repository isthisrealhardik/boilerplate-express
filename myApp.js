let express = require("express");
let app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send("Hello Express");
})

const htmlPath = __dirname + '/views/index.html';

app.get('/file', (req, res) => {
    res.sendFile(htmlPath)
})

const publicPath = __dirname + '/public';

app.use('/public', express.static(publicPath))

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({"message": "HELLO WORLD"})
    } else {
        res.json({"message": "Hello World!"})
    }
})





































 module.exports = app;
