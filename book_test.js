var express = require('express');///require express library
var app=express();///creating an object of express

var fs= require("fs");


fs.readFile('books_exc.js',function(err,data){

	if(err)
	{
		return console.error(err);
	}

	var post_books_function=function (req,res){

res.json(data.toString());
};
app.post('/post_book_Info',post_books_function);


var get_books_function=function (req,res){
res.json(data.toString());
};
app.get('/get_book_Info',get_books_function);	

fs.writeFile('input2.txt',data.toString(), function(err){
if(err)
{
	return console.error(err);
}

console.log("Data written successfully");
console.log("Let's read newly written data");
});


console.log("Read file asynchronously:" +data.toString());
});




let server= app.listen(8089,'0.0.0.0',function(){///fun expression where a funciton is assigned to a variable, the function here is a call back function,
	//which will execute only after the ip is listened
 let host =server.address().address;
 let port = server.address().port;

 console.log("Example app listening at http://%s:%s",host,port);
///arrow funciton in express;
});

