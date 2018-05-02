const db = require('../../models');
var jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {

    console.log('인증 들어옴');    
    console.log('Cookies: ', req.cookies)

    console.log(req.cookies);
    console.log(req.cookies.test2);
    console.log(JSON.stringify(req.cookies.test2));
    console.log('쿠키안에 값 인증 들어옴');
    var token = req.get('accessToken');

    console.log('인증 token : ' + token);

    if (typeof token !== 'undefined') {
        var decoded = jwt.verify(token, 'my_secret_key');
        db.userinfo.findById(decoded.id).then(function (user) {
            req.user = user;
            next();
        }).catch(function (err) {
            res.status(400).send(err.message);
        });
    } else {
        res.sendStatus(403);
    }
}
