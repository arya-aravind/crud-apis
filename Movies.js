var express = require('express');///require express library
var app=express();///creating an object of express

let movies=[
{"movie":"Laal Rang","actor":"Randeep Hooda","actress":"Piya Bajpai","rating":"8.2"},
{"movie":"Kahaani 2","actor":"Arjun Rampal","actress":"Vidhya Balan","rating":"6.2"},
{"movie":"Befikre","actor":"Ranveer Singh","actress":"Vani Kapoor","rating":"3.8"},
{"movie":"Mirzaya","actor":"arshavardhan","actress":"Saiyami","rating":"4.7"},
{"movie":"Sanam Re","actor":"Rishi Kapoor","actress":"yami gautam","rating":"3.2"}
];

var post_movies_function=function (req,res){
res.json(movies);
};
app.post('/post_movie_Info',post_movies_function);


var get_movies_function=function(req,res)
{
res.json(movies);
};
app.get('/get_movie_Info',get_movies_function);

let server= app.listen(8089,'0.0.0.0',function(){///fun expression where a funciton is assigned to a variable, the function here is a call back function,
	//which will execute only after the ip is listened
 let host =server.address().address;
 let port = server.address().port;

 console.log("Example app listening at http://%s:%s",host,port);
///arrow funciton in express;
});