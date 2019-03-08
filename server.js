// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var friends = require("./app/data/friends");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./app/public/public'));

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
  
  app.get("/survery", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/survery.html"));
  });
  
  // Displays all people
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriends = req.body;
  
    // Using a RegEx Pattern to remove spaces from newfriends
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriends.id = newfriends.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriends);
  
    friend.push(newfriends);
  
    res.json(newfriends);
  });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
