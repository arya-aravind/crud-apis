x1();
 function x1()
 {
 	console.log("hello_fun1");
 }
 /////same way

 function x2()
 {
 	console.log("hello_fun2");
 }
 x2();
//VARIABLE 
 ////function hosting:IN both the above case t will execute as it is the general nature of js ,
 ///it wont need the function TO BE DECLARED ///IN FUNCITON EXPRESSION FUNCTION HOSTING DOSENT HAPPEN.
 //// IT WILL HAPPEN IN FUNCTION DEFINITION


 ///CASE WHERE I DOSENT HAPPEN,this will throw an error
 y1();
 var y1=function()
 {
 	console.log("hello_fun33");
 }

 ///and the normal function ,

 var y2=function()
 {
 	console.log("hello_fun4");
 }
 y2();

 ////variable hosting
 x3=9;
 var x3;
 console.log(x3);


 ///where variable hosting dosent happen,this will throw an error
 
 s=9;
 let s;
 console.log(s);
