// let fs= require("fs");
// let data ='';
// //create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// //set the encoding to be utf-8
// readerStream.setEncoding('UTF8');

// //handle stream events --> data,end,errors
// readerStream.on('data',function(readerStreamData)
// {
// 	data+=readerStreamData;
// 	console.log('1st event');
// });


// readerStream.on('end',function(){
// 	console.log("data"+data);
// 	console.log("2nd event");
// });

// readerStream.on('error',function(err){
// 	console.log(err.stack);
// });

// console.log("program ended");

let fs=require("fs");
let data="this is the data i need to write into a file";

//craete a writable stream
var writerStream = fs.createWriteStream('output.txt');

//write the data to stream with encosing to be utf 8
writerStream.write(data,'UTF8');

//mark the end of file
writerStream.end();

//handle stream events -->  finish and error

writerStream.on('finish',function(){
console.log("write completed");
});


writerStream.on('error',function(){
console.log(err.stack);
});

console.log("program ended");


