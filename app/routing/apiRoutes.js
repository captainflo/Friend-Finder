var  path = require('path');
var friends = require ('../data/friends')

module.exports = function(app){
    // Displays all people
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriends = req.body;
    console.log(newfriends);

   var matImage = "";
   var matchName = "";
   var totalDifference = 50;
    for (let j = 0; j < friends.length; j++) {   
      var diff =0;
        for (let i = 0; i < newfriends.scores.length; i++) {
          newfriends.scores[i] = parseInt(newfriends.scores[i]); 
            diff += Math.abs(friends[j].scores[i] -  newfriends.scores[i]);
        } 
        
        if (diff< totalDifference){
            totalDifference = diff;
            matchName = friends[j].name;
            matImage = friends[j].photo;
            console.log(matchName);
            console.log("smaller number" + diff);
        }
    }

    var profile = {
      name: matchName,
      photo: matImage
    }
    res.json(profile);
    
  });
}