
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/insertBook',function(req,res){
	
	let bookname = req.body;
	//console.log(bookname);
	res.json(bookname);
	var jsonObj = [];
	var data = fs.readFileSync('./books_exc.json');
	jsonObj = JSON.parse(data);
	//console.log("length--"+jsonObj.length);
	var index = jsonObj.length;
	//console.log("index--"+index);
	
	jsonObj[index] = bookname;
	
	var finalData = JSON.stringify(jsonObj);
	fs.writeFile('./books_exc.json',finalData, function(err){
		if(err){
			return console.error(err);
		}	
	}); 
	
});


 var server = app.listen(8089,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); 
