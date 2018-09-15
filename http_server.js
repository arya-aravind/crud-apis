let http = require('http');
let http_server= function(req,res){

//debugger
res.writeHead(200,{'Content-Type':'application/json'});///node js is sending response as application json
let res_data={"movie_name":"ddkkf","Description":"this is the worst movie"};
res.end(JSON.stringify(res_data));//res.end accepts string parameter only,and json.stringify cant be parsed as it is string
/////only objects can be parsed in 
console.log("Server is ready");

};

http.createServer(http_server).listen(8083);
////try  json parsing assignmnets , by tomorrow
//nodemon -g -> to give global access to root folder, --save -> to give acess to the current folder only
//nodemon -> for running the changes made automatically just afer saving it