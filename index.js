var MongoCLient = require('mongodb').MongoClient;

var URL = "mongodb+srv://demo1:WkFbxsppozHot1ts@cluster0.ynz7p2o.mongodb.net/school?retryWrites=true&w=majority";

MongoCLient.connect(URL,function(error,MyMongoClient){
    if(error){
        console.log("Connection failed");
    }else{
        console.log("Connection success");
        InsertData(MyMongoClient);
        // DeleteData(MyMongoClient);
        // DeleteAllData(MyMongoClient);
        //findOneWithoutCondition(MyMongoClient);
        findOneWithCondition(MyMongoClient);
    }
});

function InsertData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students"); 

    var Mydata = {name:"sishir",age:"18",class:"Ten",Roll:"03",city:"Dhaka"};

    MyCollection.insertOne(Mydata,function(error){
        if(error){
            console.log("Data insert fail");
        }else{
            console.log("Data insert success");

        }
    });


}

function DeleteData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var DeleteItem = {Roll:"06"};
    MyCollection.deleteOne(DeleteItem,function(error){
        if(error){
            console.log("Data DELETE fail");
        }else{
            console.log("Data DELETE success");

        }
    });
}

function DeleteAllData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    MyCollection.deleteMany(function(error,ResultObj){
        if(error){
            console.log("All Data DELETE fail");
        }else{
            console.log("All Data DELETE success");

        }
    });
}

function findOneWithoutCondition(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var findObj={}
    MyCollection.findOne(findObj,function(error,result){
        console.log(result);
    });
}

function findOneWithCondition(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var findObj={"name":"sishir"}
    MyCollection.findOne(findObj,function(error,result){
        console.log(result);
    });
}




