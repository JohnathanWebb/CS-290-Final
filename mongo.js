var mongo = require("mongodb").MongoClient;
var db = null;
module.exports = function(){
	console.log("here");
	var url = "mongodb://coletyl:932687587@classmongo.engr.oregonstate.edu/932687587";

	if(db){
		console.log("! undefined");
		return db;
	} else {
		console.log("attempting to establish db connection");
		mongo.connect(url, function(){
				console.log("Connection to mongo database successful");

			});
	}
}
