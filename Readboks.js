var fs=require("fs");

fs.readFile('books_exc.js',function(err,data){
	if(err)
	{
		return console.error(err);
	}

console.log("Read file asynchronously:" +data.toString());
});