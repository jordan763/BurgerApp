var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1qaz2wsx!QAZ@WSX",
  database: "burgerdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
    connection.query("SELECT * FROM burger;", function (err, data) {
        if (err) throw err;

        res.render("burger", { typeof: data });
    });
});


app.post("/", function (req, res) {

    connection.query("INSERT INTO burger (typeof) VALUES (?)", [req.body.typeof], function (err, result) {
        if (err) throw err;

        res.redirect("/");
    });
});


app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

// Delete a plan
app.delete("/api/burger/:id", function(req, res) {
  connection.query("DELETE FROM burger WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    else if (result.affectedRows === 0) {

      return res.status(404).end();
    }
    res.status(200).end();

  });
});

