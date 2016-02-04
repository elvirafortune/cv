var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.listen(port, () => {  
    console.log('Server running at:', port)
}).on('error', err => { console.log('Err!', err) });
