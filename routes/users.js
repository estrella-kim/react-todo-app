var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('user'); //hbs를 렌더링해준다.
});

module.exports = router;
 /* res.send 와 res.render메소드 중 하나만 실행할 수 있다. 왜? */