var express = require('express');
var router= express.Router();

router.get('/about',function (req,res){
res.json({"message":"my fav bird is parrot"});
});

router.get('/contact',function(req,res){
res.json({"message":"my fav bird is parrot"});
});

module.exports=router;