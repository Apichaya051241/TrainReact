var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const databaseName = "mydb";


mongoClient.connect(url, function(err, client) {
  if (err) throw err;
  
  const db = client.db(databaseName);
  db.dropCollection("customers", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    client.close();
  });
});