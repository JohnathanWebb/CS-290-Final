/* Main serverside Javascript file */

var express = require("express");
var db = require("./mongo")();
var app = express(); 

var port = process.env.PORT || 3000;


var exphbs = require("express-handlebars"); // Do we want this?
app.engine('handlebars', exphbs( {defaultLayout: 'main' } ));
app.set('view engine', 'handlebars');


app.use(express.static("public"));

app.use("*", function(req, res){
	console.log(db);
	res.status(200).render("home");
});

app.listen(port, function(){
	console.log(" == Successfully started listening");
});
