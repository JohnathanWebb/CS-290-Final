var req = require("sync-request");
var util = require("util");
function clean_up(api_object){
	console.log(api_object);
	var obj = new Object();
	obj.addresses= [];
	for(var x =0; x<api_object.destination_addresses.length; x++){
		obj.addresses.push({
				address: api_object.destination_addresses[x], 
				distance:api_object.rows[0].elements[x].distance.text,
				duration:api_object.rows[0].elements[x].duration.text
		});
	}
	return JSON.stringify(obj);
}


module.exports = function(locationn, places){
	if(locationn==undefined || places==undefined || places.length==0){

		console.log(places.toString());
		return "Erorr: bad input ";
	} else {
			console.log("In getHttp()\nlocation = "+locationn.toString()+"\nplaces = "+util.inspect(places[0].place, false, null)); 
	}
	var params = "origins="+locationn.replace(/ /g, "+");
	params += "&destinations=";
	for(var x = 0; x<places.length; x++){
		console.log("PLACES " + x);
		var str = places[x].place;
		console.log("str = " + str);
		str = str.replace(/ /g, "+");
		params+="|"+str;
	}
	params+="&key=AIzaSyDfgygbxYVUNKD5m5J2-KypB8k4Esjiv2o";
	console.log(" == params = " + params);
	var res = req("GET", "https://maps.googleapis.com/maps/api/distancematrix/json?" + params);
	var api_object = JSON.parse(res.body.toString());
	return clean_up(api_object).toString();

}
/*
 * *
 * * Example JSON request form Google API
 * * - Just for reference  
 * *
 *
 {
    "destination_addresses" : [
       "1557 NW Monroe Ave, Corvallis, OR 97330, USA",
       "1830 NW 9th St, Corvallis, OR 97330, USA",
       "2455 NW Monroe Ave, Corvallis, OR 97330, USA"
    ],
    "origin_addresses" : [ "Bunchberry Ave, Corvallis, OR 97333, USA" ],
    "rows" : [
       {
          "elements" : [
             {
                "distance" : {
                   "text" : "2.7 km",
                   "value" : 2695
                },
                "duration" : {
                   "text" : "7 mins",
                   "value" : 446
                },
                "status" : "OK"
             },
             {
                "distance" : {
                   "text" : "5.7 km",
                   "value" : 5659
                },
                "duration" : {
                   "text" : "11 mins",
                   "value" : 688
                },
                "status" : "OK"
             },
             {
                "distance" : {
                   "text" : "2.8 km",
                   "value" : 2840
                },
                "duration" : {
                   "text" : "6 mins",
                   "value" : 369
                },
                "status" : "OK"
             }
          ]
       }
    ],
    "status" : "OK"
 }*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
