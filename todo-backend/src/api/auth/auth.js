const db = require('../../models');
var jwt = require('jsonwebtoken');

exports.auth = function (req, res, next) {

    console.log('인증 들어옴');    
    console.log(req.cookies);
    let token = req.cookies.token;
    console.log('token : ' + token);
    // res.send(req.cookies);    

    // console.log('Cookies: ', JSON.stringify(req.cookies));
    
    // console.log(req.cookies.test);
    // console.log(JSON.stringify(req.cookies.test));
    // console.log('쿠키안에 값 인증 들어옴');
    // var token = req.get('accessToken');

    // console.log('인증 token : ' + token);

    if (typeof token !== 'undefined') {
        var decoded = jwt.verify(token, 'my_secret_key');
        console.log('decoded : ' + JSON.stringify(decoded));
        console.log('decoded user: ' + decoded.user);
        console.log('decoded user: ' + decoded.user.id);
        if (decoded.user.rule === 'admin') {
            next();
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(403);
    }
}
