var express = require('express');
var router = express.Router();

// low db requires
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ habits: [], count: 0 })
  .write()

// end low db


router.get('/list', function (req, res, next) {
  res.send(db.get('habits'))
});

// create new habit instance in the database
router.post('/new', function(req, res, next) {

  const title = req.body.title;
  const description = req.body.description;

  db.get('habits')
    .push(
      {
        id : shortid.generate(),
        title : title,
        description : description,
        isComplete : false,
      }
    ).write()

  db.update('count', n => n + 1)
    .write()

  res.send("OK");
});

// TODO: check that habit is actually removed before reducing count
router.post('/remove', function(req, res, next) {

  const id = req.body.id;

  db.get('habits')
    .remove({id : id})
    .write()

  db.update('count', n => n - 1)
    .write()

  res.send("OK");
});

router.post('/update', function(req, res, next) {
  const id   = req.body.id;
  const type = req.body.type;
  const data = req.body.data;

  // if some POST parameters missing, abort
  if ( !(id && type && data) ) { 
    res.send("Missing arguments");
    return;
  }

  // get element by id
  const elem = db.get('habits').find({id : id})

  // update-type dispatcher
  switch (type) {
    case 'complete':
      elem.assign({'isComplete': data}).write();
      break;
    case 'title':
      elem.assign({'title': data}).write();
      break;
    case 'description':
      elem.assign({'description': data}).write();
      break;
    default:
      res.send("Update type didn't match any known types.")
      return;
  }

  res.send("OK");
});


module.exports = router;
