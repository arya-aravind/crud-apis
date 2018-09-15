//impot event module

var events= require('events');
var express=require('express');

var eventEmitter= new events.EventEmitter();
///fire the entering library event


var EnterHandler= function ()
{
	console.log('person enterd the library');
	///now ask librarian for book

	eventEmitter.emit('ask_librarian');//2st line

}

//bind the enter event with the handler
eventEmitter.on('enter',EnterHandler);//2nd event



eventEmitter.on('ask_librarian',function()
{
	console.log('asked librarian about the book');
	eventEmitter.emit('search_book');	//3nd event
});

eventEmitter.on('search_book',function()
{
	console.log('book fetched from library ,asking the librarian to issue the book');
	eventEmitter.emit('issue_book');	//4nd event
});
eventEmitter.on('issue_book',function()
{
	console.log('librarian issues the book , asking for the payment');
	eventEmitter.emit('pay_fees');	//5th event
});
eventEmitter.on('pay_fees',function()
{
	console.log('Fee payed for the book');
	eventEmitter.emit('get_book');	//6th event
});
eventEmitter.on('get_book',function()
{
	console.log('get the book and return');
	
});


eventEmitter.emit('enter');//1st line

console.log("Program ended");

