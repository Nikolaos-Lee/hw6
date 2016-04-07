var express = require('express'),
    index   = require('../controllers/index'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
//inport all controllers

    router  = express.Router();

router.route('/').get(index);
//if url= /  get(index)>>render index.ejs
router.route('/person')
  .post(create)
  .get(readall);
router.route('/person/:id')
  .get(read);

module.exports = router;
