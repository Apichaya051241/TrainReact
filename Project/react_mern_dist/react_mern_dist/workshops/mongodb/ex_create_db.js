var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const databaseName = "mydb";

mongoClient.connect(url, function (err, client) {
    if (err) throw err;
    var db = client.db(databaseName);

    console.log('Database created! - You would not see db until at least collection is created.');
    client.close();
})