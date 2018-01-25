var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.use('/', express.static('dist'));

app.get('/',(req,res) => res.send('index'))

app.listen(3000, () => console.log('This is working!'))