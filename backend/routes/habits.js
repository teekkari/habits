var express = require('express');
var router = express.Router();

// low db requires
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ habits: [] })
  .write()

// end low db

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("working ait mate");
});

router.get('/list', function (req, res, next) {
  res.send(db.get('habits'))
});

router.post('/new', function(req, res, next) {

  const title = req.body.title;
  const description = req.body.description;

  db.get('habits')
    .push({title : title, description : description})
    .write()
});

module.exports = router;
