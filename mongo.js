var mongo = require("mongodb").MongoClient;
var db = null;
module.exports = function(){
	console.log("here");
	//var url = "mongodb://coletyl:932687587@classmongo.engr.oregonstate.edu/932687587";
	var url = "mongodb://cs290_coletyl:cs290_coletyl@classmongo.engr.oregonstate.edu:27017/cs290_coletyl"
	if(db){
		console.log("is defined");
		return db;
	} else {
		console.log("attempting to establish db connection");
		mongo.connect(url, function(error,client){
				if(error){
					console.log("There was an error while connceting : " + error );
				} else {
					console.log("Connection to mongo database successful");
					db = client.db("cs290_coletyl");
					return db;
				}
			});
	}
}
