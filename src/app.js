'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res){
  res.send('<h1>I love Treehouse!</h1>');
})

app.get('/blog', function(req, res){

})

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
