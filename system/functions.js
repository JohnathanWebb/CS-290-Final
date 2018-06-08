var req = require("sync-request");
module.exports = function(locationn, places){
	if(locationn==undefined || places==undefined || places.length==0){
			return "Erorr: bad input";
	} else {
			console.log("In getHttp()\nlocation = "+locationn.toString()+"\nplaces = "+places.toString());
	}
	var params = "origins="+locationn.replace(/ /g, "+");
	params += "&destinations=";
	for(var x = 0; x<places.length; x++){
		console.log("PLACES " + x);
		places[x] = places[x].replace(/ /g, "+");
		params+="|"+places[x];
	}
	params+="&key=AIzaSyDfgygbxYVUNKD5m5J2-KypB8k4Esjiv2o";
	console.log(" == params = " + params);
	var res = req("GET", "https://maps.googleapis.com/maps/api/distancematrix/json?" + params);
	return res.toString();	
}
