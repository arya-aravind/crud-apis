const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 var http = require("http").Server(app).listen(3000);
// default options

// app.get('/upload', function(req, res) {
//     res.sendFile(__dirname + '/index.htm')
//   })
  app.use(fileUpload());
app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;
  let    filename=sampleFile.name;
  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('C:/Users/ARYA ARAVIND/Desktop/nodesection/videous/upload/' + filename, function(err) {
    
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });

 
});
