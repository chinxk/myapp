var express = require('express');
var app = express();

app.user(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.send('hell');
});

app.get('/top', function(req, res){
    res.sendFile('/top.html');
});

var server = app.listen(3000, function (){
    console.log('my app started');
});
