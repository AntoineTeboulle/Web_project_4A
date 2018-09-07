var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/Home.html');
});

app.get('/Contact', function(request, response) {
  response.sendFile(__dirname + '/views/Contact.html');
});

app.get('/Questionnaire',function(request, response)  {
  response.sendFile(__dirname + '/views/Questionnaire.html');
});

app.get('/Login',function(request, response)  {
  response.sendFile(__dirname + '/views/Login.html');
});

app.get('/Register',function(request, response)  {
  response.sendFile(__dirname + '/views/Register.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log ('Your app is listening on port ' + listener.address().port);
});