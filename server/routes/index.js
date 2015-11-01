var express = require("express");
var router = express.Router();
var path = require('path');
var doMath = require('../modules/doMath');


router.route('/data')
    //.get(function(req, res){
    //    res.send("Is this thing on?");
    //})
    .post(function(req, res){
        var solution = doMath(req.body);
        res.send({message: solution});
    });



router.get("/*", function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;