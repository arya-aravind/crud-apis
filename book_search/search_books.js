var express = require('express');
var app = express();
var fs = require("fs");
var path=require('path');


app.get('/readBook/:books_name',function(req,res){

	let searchName = req.params.books_name;
	
		var data1 = fs.readFileSync('./search_books_exc.json');
		
			var jsonObj = [];

				jsonObj = JSON.parse(data1);
		for(var i=0;i<jsonObj.length;i++)
			{
				if(searchName==jsonObj[i].name)
				{
					let file=jsonObj[i].path;
					 //  var filename = path.basename(file);
					 
					 //  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
					  
					 //  var filestream = fs.createReadStream(file);
					 //  filestream.pipe(res);
					 //  res.send('file successfully downloaded');
					 // res.status(200).end();
					 // console.log("the given id is not found");

					 res.download(file);
					// console.log(jsonObj[i].name);
					// let path_data=jsonObj[i].path;
					// res.sendFile(path_data);
					
				}
				else
				{
				console.log("no such book found");
				}
			}
			//res.json(jsonObj);
	
});



 var server = app.listen(8085,'0.0.0.0',function(){
	let host = server.address().address;
	let port = server.address().port;
	console.log("Example app listening at http://%s:%s",host,port);
}); 