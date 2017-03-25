var express = require('express')
var path = require('path')
var app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(80, function () {
  console.log('App Running on port 80');
})
