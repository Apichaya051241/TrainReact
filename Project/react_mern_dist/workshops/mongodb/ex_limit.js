var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const databaseName = "mydb";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  db.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    const db = client.db(databaseName);
    console.log(result);
    client.close();
  });
});