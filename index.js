var MongoCLient = require('mongodb').MongoClient;

var URL = "mongodb+srv://demo1:WkFbxsppozHot1ts@cluster0.ynz7p2o.mongodb.net/school?retryWrites=true&w=majority";

MongoCLient.connect(URL,function(error,MyMongoClient){
    if(error){
        console.log("Connection failed");
    }else{
        console.log("Connection success");
        //InsertData(MyMongoClient);
        // DeleteData(MyMongoClient);
        // DeleteAllData(MyMongoClient);
        //findOneWithoutCondition(MyMongoClient);
        //findOneWithCondition(MyMongoClient);
        //findAllData(MyMongoClient);
        // findAllDataByProjection(MyMongoClient);
        // findAllDataByQuery(MyMongoClient);
        // findAllDataByLImit(MyMongoClient);
        // findAllDataBySort(MyMongoClient);
        // updateMyData(MyMongoClient);
        // createMyCollection(MyMongoClient)
        DeleteMyCollection(MyMongoClient)

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

function findAllData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    MyCollection.find().toArray(function(error,result){
        console.log(result);

    })
}

function findAllDataByProjection(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var ItemObj = {};
    var ItemProjection = {projection:{class:"Ten",Name:"gobi"}}
    MyCollection.find(ItemObj,ItemProjection).toArray(function(error,result){
        console.log(result);

    })
}

function findAllDataByQuery(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var Query = {"name":"mahi","class":"Three"};
    MyCollection.find(Query).toArray(function(error,result){
        console.log(result);

    });
}

function findAllDataByLImit(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    MyCollection.find().limit(3).toArray(function(error,result){
        console.log(result);

    });
}

function findAllDataBySort(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var Sortpattern = {age:1}; //forSerialwise
    //var Sortpattern = {age:-1}; //forReverseSerialwise
    MyCollection.find().sort(Sortpattern).toArray(function(error,result){
        console.log(result);

    });
}

function updateMyData(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    var MyCollection = MyDatabase.collection("students");

    var MyQuerry={name:"sishir"};
    var MyNewValues={$set:{name:"Safa",class:"One"}};

    MyCollection.updateOne(MyQuerry,MyNewValues,function(error,result){
        console.log(result);
    });
}

function createMyCollection(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    MyDatabase.createCollection("teachers",function(error,result){
        console.log(result);
    });
}

function DeleteMyCollection(MyMongoClient){
    var MyDatabase = MyMongoClient.db("school");
    MyDatabase.dropCollection("teachers",function(error,result){
        console.log(result);
    });
}
