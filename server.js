var express = require ('express');
var app = express();
var path = require('path');
var bodyParser = require ('body-Parser')

app.get('/', function(req, res) {
    console.log("a client requested the game page");
    res.sendFile(__dirname + '/public/index.html');
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, function(){
    console.log("Server is booted");
});

//starta server: node server.js

//ctrl + c = stänger server