var express = require('express');
var router = express.Router();

router.route('/routes').get(function(req, res){
    res.json({result: "get was called"});
   }).post(function(req, res){
    res.json({result: "post was called"});
   }).put(function(req, res){
    res.json({result: "put was called"});
   }).delete(function(req, res){
    res.json({result: "delete was called"});
   });


router.get('/test', function(req, res){
  res.json({result: 'test'})
});

module.exports = router;

