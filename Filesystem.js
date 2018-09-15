var fs=require("fs");/////predefined file sysytem , containing all the required functions for file
// console.log("Write data into file");
// fs.writeFile('input.txt','Hey , how are you guys?', function(err){///this is where i am wiritng into a file

// if(err)
// {
// 	return console.error(err);
// }

// console.log("Data written successfully");
// console.log("Let's read newly written data");



// 	});

////reading a file asynchronously,node js is asynch in nature by dafault.

// fs.readFile('input.txt',function(err,data){
// 	if(err)
// 	{
// 		return console.error(err);
// 	}

// console.log("Read file asynchronously:" +data.toString());
// });
// console.log("ready");

// ///reading file synchronously
// var data=fs. readFileSync('input.txt');
// console.log(data.toString());
// console.log("Do other tasks");


/////creating a directory in a location we want to
// fs.mkdir('C://Users//ARYA ARAVIND//Desktop//nodesection//new_test_direcory',function(err)
// {
// 	if(err)
// 	{
// 		return console.error(err);
// 	}
// console.log("Directory created successfully");
// });	



/////going to read directory ,from the one we created above,it will read  the file names in the direcory one by one with the foreach loop
fs.readdir('C://Users//ARYA ARAVIND//Desktop//nodesection//new_test_direcory',function(err,files)
{
	if(err)
	{
		return console.error(err);
	}
	files.forEach(function(file)///here file is a variable,the files is also a variable
	{
		console.log(file);
	});
});




