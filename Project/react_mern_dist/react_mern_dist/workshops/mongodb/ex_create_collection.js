var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const databaseName = "mydb";

mongoClient.connect(url, function(err, client) {
    if (err) throw err;
    const db = client.db(databaseName);

    db.createCollection("customers", function (err, res){
        if (err) throw err;
        console.log("Collection created");

    client.close();
    });
});
