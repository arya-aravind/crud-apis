///here router class started

var express = require('express');
var app= express();
var bodyParser=  require('body-parser');
var router= express.Router();

var birds= require('C:\\Users\\ARYA ARAVIND//Desktop\\nodesection\\route\\birds');
var reptiles = require('C:\\Users\\ARYA ARAVIND\\Desktop\\nodesection\\route\\reptiles');

//var urlencodedParser = bodyParser.urlencoded({extended: false});
//to use router function
app.use('/birds',birds);
app.use('/reptiles',reptiles);

 var server = app.listen(8089,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); 

//localhost:8085/birds/contact