var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/readBook',function(req,res){
	
	fs.readFile('./books_exc.json',function(err,data){
			if(err){
				return console.error(err);
			}
			
			var jsonObj = JSON.parse(data);
			res.json(jsonObj);
	});
	
});



 var server = app.listen(8089,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); 