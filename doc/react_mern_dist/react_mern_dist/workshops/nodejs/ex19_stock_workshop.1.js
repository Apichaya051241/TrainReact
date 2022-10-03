// https://webapplog.com/intro-to-express-js-parameters-error-handling-and-other-middleware/
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3');
var helpers = require('express-helpers')
var formidable = require('formidable');
var fs = require("fs");



var app = express();
helpers(app);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.set('views', './stock')
app.use(express.static(path.join(__dirname, '/stock')))
app.get('/', function (req, res) {
  queryData(function (products) {

    res.render('index', { products: products });

  });
});


app.get('/add', function (req, res) {
  res.render('add', {});
});

app.get('/edit', function (req, res) {
  queryByID(req.query.id, function (row) {
    console.log(JSON.stringify(row));
    res.render('edit', { item: row });
  });
});


app.post('/api/update', function (req, res) {
 
  try {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

      if (files.filetoupload.size != 0) {

        var oldpath = files.filetoupload.path;
        var newpath = path.join(__dirname, "./stock/images/" + fields.image);

        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          console.log("Update file successfully");
        });
      }

      var data = {
        id: fields.id,
        title: fields.title,
        description: fields.description,
        price: fields.price,
        stock: fields.stock      
      }

      updateData(data)
      res.redirect("/");
    });
  } catch (err) {
    throw err;
  }

  
});

app.get('/api/delete', function (req, res) {

  deleteData(req.query.id);
  res.redirect("/");
});

app.post('/api/add', function (req, res) {


  try {
    var form = new formidable.IncomingForm();
    var newname = Date.now();
    form.parse(req, function (err, fields, files) {
      /*
      var data = {title: req.body.title, 
                  description: req.body.description,
                  price: req.body.price,
                  stock: req.body.stock}
      */
      console.log("old files: " + JSON.stringify(files));

      var oldpath = files.filetoupload.path;
      var fileName = newname.toString() + "." + files.filetoupload.name.split('.').pop();
      var newpath = path.join(__dirname, "./stock/images/" + fileName);

      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;

        var data = {
          title: fields.title,
          description: fields.description,
          price: fields.price,
          stock: fields.stock,
          image: fileName
        }

        insertData(data)
        res.redirect("/");
      });
    });
  } catch (err) {
    console.log("err : " + err);
    res.json(err);
  }
});

function insertData(data) {
  let db = openDB();
  const sql = `INSERT INTO stock(title, description, price, stock, image) 
  VALUES('${data.title}',
         '${data.description}',
          ${data.price},
          ${data.stock},
          '${data.image}')`;

  console.log(sql);

  db.run(sql);

  closeDB(db);
}

function updateData(data) {
  let db = openDB();
  const sql = `UPDATE stock SET title= '${data.title}',
               description = '${data.description}', 
               price = ${data.price}, 
               stock = ${data.stock} where id='${data.id}'`;

  console.log(sql);

  db.run(sql);

  closeDB(db);
}

function deleteData(id) {
  let db = openDB();
  const sql = `DELETE FROM stock WHERE ID=${id}`;

  console.log(sql);
  db.run(sql);

  closeDB(db);
}

function queryByID(id, callback) {
  let db = openDB();

  db.get(`SELECT * FROM stock where id=?`, [id], (err, row) => {
    if (err) {
      throw err;
    }
    callback(row);
  });

  closeDB(db);

}



function queryData(callback) {
  let db = openDB();

  db.all(`SELECT * FROM stock order by id`, (err, row) => {
    if (err) {
      callback([]);
    }
    callback(row);
  });

  closeDB(db);

}


function openDB() {

  let db = new sqlite3.Database(path.join(__dirname, '/stock/data.db'), (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the stock database.');
  });

  var sql_create_table = `CREATE TABLE IF NOT EXISTS 'stock' (
      'id'	INTEGER PRIMARY KEY AUTOINCREMENT,
      'title'	TEXT,
      'description'	TEXT,
      'price'	INTEGER,
      'stock'	INTEGER,
      'image' TEXT 
    )`;

  db.run(sql_create_table);
  return db;
}

function closeDB(db) {
  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
