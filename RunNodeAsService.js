var Service = require('node-windows').Service;

//create a new service object

var svc = new Service({
	name : 'Hello world',
	description: 'the nodejs.org example web server',
	script: 'C:\\Users\\ARYA ARAVIND\\Desktop\\nodesection\\Filesystem.js'

})

//listen for the ''install'' event, which indicates the process is available as a service
svc.on('install',function(){
	svc.start();
});
svc.install();