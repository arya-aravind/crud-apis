var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";//this is a default port for mongo
/**
 * npm install mongodb@2.2.33 --save (-- for db.collection is not a function)
 */
   MongoClient.connect(url,function(err,db){
        if(err) throw err;
        var myobj= {name:"Company Inc",address:"Highway 37"};
        db.collection("customers").insertOne(myobj,function(err,res){
            if(err) throw err;
            console.log("1 document inserted");
            db.close();
        })
    })
