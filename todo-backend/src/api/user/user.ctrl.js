const db = require('../../models');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');

exports.register = function (req, res) {

    // sequelize 세팅
    // var db = require('../models');

    db.sequelize
        .sync({ force: false }) // 테이블 생성
        .then(function () {
            console.log('DB 연결 성공');
        }).catch(function (e) {
            throw new Error('DB 연결 실패: ' + e);
        });

    let result = {};
    let id = req.body['id'];
    let pw = req.body['pw'];
    let email = req.body['email'];

    let pw2 = crypto.createHash('sha512').update(pw).digest('base64');

    const getYMD = function () {
        let date = new Date();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        let hrs = date.getHours();
        if (Number(month) < 10) { month = "0" + month; }
        if (Number(day) < 10) { day = "0" + day; }
        if (Number(hrs) < 10) { hrs = "0" + hrs; }
        return "" + date.getFullYear() + "" + month + "" + day + "" + hrs;
    }

    db.userinfo.create({
        user_id: id,
        user_pw: pw2,
        user_email: email
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        //TODO: error handling
    });
}

exports.login = function (req, res) {

    // sequelize 세팅
    // var db = require('../models');

    db.sequelize
        .sync({ force: false }) // 테이블 생성
        .then(function () {
            console.log('DB 연결 성공');
        }).catch(function (e) {
            throw new Error('DB 연결 실패: ' + e);
        });

    let result = {};
    let id = req.body['id'];
    let pw = req.body['pw'];

    let pw2 = crypto.createHash('sha512').update(pw).digest('base64');

    const getYMD = function () {
        let date = new Date();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        let hrs = date.getHours();
        if (Number(month) < 10) { month = "0" + month; }
        if (Number(day) < 10) { day = "0" + day; }
        if (Number(hrs) < 10) { hrs = "0" + hrs; }
        return "" + date.getFullYear() + "" + month + "" + day + "" + hrs;
    }

    db.userinfo.findOne({
        where: { user_pw: pw2, user_id: id }
    }).then(function (results) {

        console.log('세션데이터출력 : ' + req.user);

        if (results) {
            console.log('성공이다 430');
        } else {
            console.log('실패다 430');
        }

        console.log('세션 저장!!');
        if (results === null || results === '') {
            console.log('결과값이 없음!!');
        }
        console.log('results : : : : : :: : ' + results);
        req.session.userId = id;

        res.json(results);
    }).catch(function (err) {
        console.log("finAll()에러 발생")
        //TODO: error handling
    });
}

exports.login2 = function (req, res) {

    // sequelize 세팅
    // var db = require('../models');

    // db.sequelize
    //     .sync({ force: false }) // 테이블 생성
    //     .then(function () {
    //         console.log('DB 연결 성공');
    //     }).catch(function (e) {
    //         throw new Error('DB 연결 실패: ' + e);
    //     });

    // res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
    // res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    // res.append('Access-Control-Allow-Credentials', true);

    // let id = req.body['id'];
    // console.log('id : '+ id);

    // let id = req.params.id;
    // console.log('id : '+ id);
    let userinfo = req.body['userinfo'];
    let id = userinfo.id;
    let pw = userinfo.pw;

    // res.setHeader('content-type', 'application/json');


    // let result = {};
    // let id = req.body['id'];
    // let pw = req.body['pw'];

    let pw2 = crypto.createHash('sha512').update(pw).digest('base64');

    const getYMD = function () {
        let date = new Date();
        let month = (date.getMonth() + 1);
        let day = date.getDate();
        let hrs = date.getHours();
        if (Number(month) < 10) { month = "0" + month; }
        if (Number(day) < 10) { day = "0" + day; }
        if (Number(hrs) < 10) { hrs = "0" + hrs; }
        return "" + date.getFullYear() + "" + month + "" + day + "" + hrs;
    }

    function getToken(uid) {
        const user = {
            id: uid,
            rule: 'admin'
        };
        const token = jwt.sign({ user }, 'my_secret_key');
        // console.log('token: ' + token);
        // const user = {uid : uid};

        // var token = jwt.sign({
        //     id: user
        // }, secret);
        return token;
    }

    // function setCookie() {
    //     res.cookie('string','cookie').send('hello');
    // }

    db.userinfo.findOne({
        where: { user_pw: pw2, user_id: id }
    }).then(function (results) {
        // console.log(getToken(123));
        // console.log(getToken('123'));
        if (results) {
            console.log('성공이다 430 051');
            console.log('results.user_id : ' + results.user_id);

            // res.status(200).send('hello');
            console.log('성공이다 22');
            let tmp = getToken(results.user_id);
            console.log("tmp : " + tmp);
            // res.clearCookie('test');
            // console.log(req.cookies);
            res.cookie('token', tmp).send();

        } else {
            console.log('실패다 430');
            res.json({
                results: 'false'
            });
        }
    }).catch(function (err) {
        console.log("finAll()에러 발생")
        //TODO: error handling
    });
}

exports.login3 = function (req, res) {

    let id = req.params.id;
    console.log('id : ' + id);
    let id2 = req.body['id'];
    console.log('id2 : ' + id2);
    res.cookie('string', 'cookie').end();
}