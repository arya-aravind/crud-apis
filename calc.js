var express = require('express');///require express library
var app=express();///creating an object of express


var calc=function (req,res){

var num1=parseInt(req.params.num1);
var num2=parseInt(req.params.num2);
var operation=req.params.oper;
console.log("got a get request for the homepage " + num1 + "num2..."+ num2 + "operation" + operation);


if(operation=='multiply')
{
	console.log("here");
	res.json({"operation":"multiply","result": (num1*num2)});
	
}

};
app.post('/calcu/:oper/:num1/:num2',calc);//////////////////using post

///using get it will be
// app.get('/calcu/:oper/:num1/:num2',calc);

let server= app.listen(8089,'0.0.0.0',function(){///fun expression where a funciton is assigned to a variable, the function here is a call back function,
	//which will execute only after the ip is listened
 let host =server.address().address;
 let port = server.address().port;

 console.log("Example app listening at http://%s:%s",host,port);

});
