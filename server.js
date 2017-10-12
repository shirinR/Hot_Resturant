var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


var tables = [];
var waitlist =[];

// Routes
app.get("/", function(req,res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req,res){
  res.sendFile(path.join(__dirname, "make_reservation.html"));
});

app.get("/tables", function(req,res){
  res.sendFile(path.join(__dirname, "view_tables.html"));
});

app.get("/app.js", function(req,res){
  res.sendFile(path.join(__dirname, "app.js"));
});

app.post("/api/tables", function(req, res){
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newcharacter);
  tables.push(newcharacter);
  res.json(newcharacter);
});

app.post("/api/reserve", function(req, res){
  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newcharacter);
  waitlist.push(newcharacter);
  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
