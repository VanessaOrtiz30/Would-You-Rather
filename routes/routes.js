var data = require("../data/data.json");
var decisions = "data/decisions.json";
var fs = require('fs');

var appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send(data);
    });
    app.put("/posts", function(req, res) {
        var allData = fs.readFileSync(decisions);
        var fileData = JSON.parse(allData);
        const choice = req.body.choices;
        fileData.choices.push(choice)
         fs.writeFile(decisions,JSON.stringify(fileData, null, 2),function(err){
         if(err){
             console.error(err);
            }
        });
    })
  }
  
  module.exports = appRouter;
