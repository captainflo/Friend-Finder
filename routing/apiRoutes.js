// Dependencies
// =============================================================
var path = require("path");
var friend = require("../app/data/friends");

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survery", function(req, res) {
    res.sendFile(path.join(__dirname, "survery.html"));
  });
  
  // Displays all people
  app.get("/api/survery", function(req, res) {
    return res.json(friend);
  });
  
  // Create New person - takes in JSON input
  app.post("/api/person", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;
  
    // Using a RegEx Pattern to remove spaces from newPerson
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newPerson.id = newPerson.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newPerson);
  
    friend.push(newPerson);
  
    res.json(newPerson);
  });