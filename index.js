var express = require('express');
var app = express();

var pug = require('pug');

app.get('/',(req,res) => res.send('Express is Working!'))

app.listen(3000, () => console.log('This is working!'))