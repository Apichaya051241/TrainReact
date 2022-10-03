var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const databaseName = "mydb";


MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const db = client.db(databaseName);
  // delete one
  var myquery = { address: 'Mountain 21' };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });

  // delete many
  var myquery = {address: /Lowstreet/};
  db.collection("customers").deleteMany(myquery, function (err, obj) {
      if (err) throw err;
      console.log(obj.result.n + " document(s) deleted");
  });
});


//client.close();
