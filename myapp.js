var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.send('hello');
});

app.get('/top', function(req, res){
    res.sendfile('./views/top.html');
});

var server = app.listen(3000, function (){
    console.log('my app started');
});
