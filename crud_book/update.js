var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.put('/updateBook/:id',function(req,res){
	
	let bookId = req.params.id;
	console.log(bookId);
	let bookname = req.body;
	res.json(bookname);
	
	var jsonObj = [];
	//console.log("Book ID: "+bookId);
	
	var data = fs.readFileSync('./books_exc.json');
	jsonObj = JSON.parse(data);
	//console.log("jsonObj: "+jsonObj);

var index = jsonObj.length;
	console.log("index--"+index);
	
	for(var i=0; i<jsonObj.length; i++){
		if(jsonObj[i].id == bookId){
			jsonObj[i] = bookname;
		}
		else{
			console.log("the given id is not found");
		}
	}
	var finalData = JSON.stringify(jsonObj);
	fs.writeFile('./books_exc.json',finalData, function(err){
		if(err){
			return console.error(err);
		}	
	});
	
	//res.json(finalData);
});


 var server = app.listen(8089,'0.0.0.0',function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); 