var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.post("/submit-student-data", function(req, res) {
  var name = req.body.firstName + " " + req.body.lastName;
  res.send(name + " Submitted Successfully!");
});

// setting middleware
app.use(express.static(__dirname + "public")); // serves resource from public folder
//Serves all the request which includes /images in the url from Images folder
app.use("/virtualPathName", express.static(__dirname + "Images"));

var server = app.listen(5000, function() {
  console.log("Node server is running..");
});
