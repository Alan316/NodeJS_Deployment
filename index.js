var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use('/', express.static('public'));

app.get('/',(req,res) => res.sendFile('index.html'))

app.listen(3000, () => console.log('This is working!'))