var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    connection.query('SELECT * from todos', function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0]);
        // res.send(results);
        //res.render('login', { title: 'Express', results : results[0].name });
    });
    //res.render('todo');
});

module.exports = router;