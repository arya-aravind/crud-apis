var express = require('express');
var router= express.Router();

router.get('/about',function (req,res){
res.json({"message":"my fav reptile is snake"});
});

router.get('/contact',function(req,res){
res.json({"message":"my fav reptile is snake"});
});

module.exports=router;