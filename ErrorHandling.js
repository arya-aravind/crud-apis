var divide= function(x,y,next){
	if(y===0)
	{
		//throw the error safely by calling the completion callback with the first argument being error
		next(new Error('Divide by zero error'));
	}
	else
	{
		//no error occured ,continue on
		next(null,x/y);
	}
}

divide(4,2,function(err,result){
	if(err)
	{
		console.log('4/2',err);
	}
	else
	{
		console.log('Result is'+result);
	}
});

divide(4,0,function(err,result)
{
	if(err)
	{
		console.log('4/0 =err',err);
	}
	else
	{
		console.log('result is'+result);
	}
});
