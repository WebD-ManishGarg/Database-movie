var express = require('express');
var request = require('request');
var app = express();
const port=process.env.PORT||4000;
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('search');
});

app.get('/results', function(req, res){
  var query = req.query.search;
  console.log(query);
  var url = 'https://www.omdbapi.com/?s='+query+'&apikey=b74fa5b6';
  request(url, function(error, response, body){
      if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          res.render('results', {data: data});
      }


});
});

 app.listen(port, function(){
     console.log(`Movie app started on port: ${port}`);
 });
