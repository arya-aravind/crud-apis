var express = require('express');///require express library
var app=express();///creating an object of express


app.post('/api',function(req,res)///only get will show in browser,when chnages to post we need to execute it in postman api
{
	res.json({"name":"hello"});
});

let server= app.listen(8089,'0.0.0.0',function(){///fun expression where a funciton is assigned to a variable, the function here is a call back function,
	//which will execute only after the ip is listened
 let host =server.address().address;
 let port = server.address().port;

 console.log("Example app listening at http://%s:%s",host,port);

});

let start=(name)=>{
	return "started making apis in node"+name;
}

console.log(start("arya"));

newfunc=()=>{
let z;
if(1){
	z=2;
}
	console.log(z);
}

newfunc=()=>{

if(1){
	var z=2;
}
	console.log(z);
}
