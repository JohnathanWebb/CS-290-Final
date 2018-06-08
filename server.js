/* Main serverside Javascript file */

var express = require("express");
var db = require("./mongo")();
var app = express(); 

var getHttp = require("./system/functions");

var port = process.env.PORT || 3000;


var exphbs = require("express-handlebars"); // Do we want this?
app.engine('handlebars', exphbs( {defaultLayout: 'main' } ));
app.set('view engine', 'handlebars');

var places = [ 
	"1557 NW Monroe Ave, Corvallis, OR 97330",
	"Jimmy John's, 1830 NW 9th St, Corvallis, OR 97330",
	"2455 NW Monroe Ave, Corvallis, OR 97330"
];
app.use(express.static("public"));

app.get('/api/:originn', function(req,res){
	console.log("req params " + JSON.stringify(req.params)); 
	var originn = req.params.originn;
	var resp = getHttp(originn, places);
	res.write(resp);
	res.status(200).send();
});
app.use("/", function(req, res){
	console.log("In home - " + db);
	res.status(200).render("home");
});

app.listen(port, function(){
	console.log(" == Successfully started listening");
});
