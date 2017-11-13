var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;


var MS = require('mongoskin');
var db = MS.db('mongodb://user:pwd@127.0.0.1:27017/ame394');

var light;
var temp;
var humidity;

app.get("/update", function (req, res) {
    console.log("GET req arrived")
    var info = req.query;
    info.time = new Date().getTime()//.toString();

    db.collection('data').insert(info, function(err, result) {
      console.log(result);
    });

    res.send("1")
});

app.get("/getDataLatest", function (req, res) {
  db.collection('data').find().sort({time:-1}).limit(1).toArray(function(err, result){
    rObj = result[0];
    console.log(rObj);
    res.send(JSON.stringify(rObj));
  });
});


app.get("/getDataInRange", function (req, res) {
  var info = req.query;
  console.log(info);
  var fromDate = parseInt(info.from) - 0*60;
  var toDate = parseInt(info.to);

  db.collection('data').find({time:{$lt:toDate, $gt:fromDate}}).sort({time:-1}).toArray(function(err, result){
    console.log(result);
    res.send(JSON.stringify(result));
  });
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);



