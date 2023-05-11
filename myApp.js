let express = require("express");
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/name', (req, res) => {
    let string = `${req.body.first} ${req.body.last}`;
    console.log(string);
})

app.use((req, res, next) => {
    let string = `${req.method} ${req.path} - ${req.ip}`
    console.log(string);
    next();
})
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

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
})

app.get('/:word/echo', (req, res) => {
    res.send(req.params.word);
})

app.get('/name', (req, res) => {
    let firstName = req.query.first;
    let lastName= req.query.last;
    res.json({name: `${firstName} ${lastName}`})
})





































 module.exports = app;
