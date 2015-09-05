var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
 });*/

router.get('/', function (req, res) {
    res.render('index', {title: "Home page"});

});

router.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    /*
     Perform the login and send a response.
     */
    res.json({"done": "yes"});
    //OR
    res.render('account');
});

router.get('/profile', function (req, res) {
    var profile_id = req.query.id;
    res.render('profile', {id: profile_id});
});

router.get('/logout',function(req,res){
    res.json({"logout":"yes"});
});

module.exports = router;
