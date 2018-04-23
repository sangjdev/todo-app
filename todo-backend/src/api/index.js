module.exports = function (app, fs) {

    const model = require('../models/index.js');

    app.get('/', function (req, res) {

        console.log('root directory 실행');

        res.send('rest api dev root')
    })

    app.post('/post/add', function (req, res) {

        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

        console.log('post/add들어옴');

        // sequelize 세팅
        var db = require('../models');

        db.sequelize
            .sync({ force: false }) // 테이블 생성
            .then(function () {
                console.log('DB 연결 성공');
            }).catch(function (e) {
                throw new Error('DB 연결 실패: ' + e);
            });

        db.postinfo.findAll().then(function (results) {

            console.log("results : " + results);
            res.json(results);
        }).catch(function (err) {
            console.log("finAll()에러 발생")
            //TODO: error handling
        });

        let result = {};
        let title = req.body['title'];
        let content = req.body['content'];
        let cate = req.body['cate'];
        let prior = req.body['prior'];

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

        db.postinfo.create({
            post_title: title,
            post_content: content,
            post_cate: cate,
            post_prior: prior,
            post_date: getYMD(),
            use_yn: 'y'
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            //TODO: error handling
        });
    });

    app.post('/post/edit/:postId', function (req, res) {

        const db = require('../models'); // sequelize 세팅
        var postId = req.params.postId;

        console.log('잘들어옴 : ' + postId);

        let title = req.body['title'];
        let content = req.body['content'];
        let cate = req.body['cate'];
        let prior = req.body['prior'];

        console.log('title : ' + title + ' content : ' + content + 'cate : ' + cate + 'prior: ' + prior);

        db.postinfo.update({
            post_title: title,
            post_content: content,
            post_cate: cate,
            post_prior: prior,
        },
            { where: { _pid: postId }, returning: true })
            .then(function (result) {
                res.json(result);
            }).catch(function (err) {
                //TODO: error handling
            });
    });

    app.post('/post/edit/:postId', function (req, res) {

        console.log('post/edit/id')

        pool.getConnection(function (err, connection) {

            connection.query('SELECT * FROM test.userinfo', function (err, rows, fields) {
                if (!err) {
                    console.log('The solution is: ', rows[0]);
                    res.send(rows);
                } else {
                    console.log('Error while performing Query.', err);
                }
                connection.release();
            });
        })
    });

    app.get('/post/count/', function (req, res, next) {

        const db = require('../models'); // sequelize 세팅

        db.sequelize.query("SELECT COUNT(*) as cnt FROM test.postinfo")
            .then(function (results) { // .sequelize.query('SQL 쿼리 작성 ... 현재는 간단한 join문                         
                res.json(results[0]);

            }).catch(function (err) {
                return next(err);
            })
    });

    app.get('/post/menu', function (req, res, next) {

        const db = require('../models'); // sequelize 세팅

        db.sequelize.query("SELECT COUNT(*) as cnt, post_cate FROM test.postinfo GROUP BY post_cate")
            .then(function (results) { // .sequelize.query('SQL 쿼리 작성 ... 현재는 간단한 join문                         
                res.json(results[0]);

            }).catch(function (err) {
                return next(err);
            })
    });

    app.get('/post/info/:postId', function (req, res) {

        var db = require('../models'); // sequelize 세팅        
        var postId = req.params.postId;

        console.log('postId: ' + postId);

        db.postinfo.findAll({
            where: { _pid: postId }
        }).then(function (results) {

            console.log("results : " + results);
            res.json(results);
        }).catch(function (err) {
            console.log("finAll()에러 발생")
            //TODO: error handling
        });
    })

    app.get('/post/:postId', function (req, res) {

        var postId = 1;

        if (req != null) {
            postId = req.params.postId;   
            console.log('req != null : postId : ' + postId);
        }
        
        console.log('postId : ' + postId);

        const db = require('../models'); // sequelize 세팅

        // db.sequelize
        //     .sync({ force: false }) // 테이블 생성
        //     .then(function () {
        //         console.log('DB 연결 성공');
        //     }).catch(function (e) {
        //         throw new Error('DB 연결 실패: ' + e);
        //     });
        var result = [];
        
        var perpage = 3;
        var pnum = parseInt((postId-1)*3);

        console.log('typeof(pnum) : ' + typeof(pnum));
        console.log('typeof(pnum) : ' + pnum);
        db.postinfo.findAll({
            offset: pnum,
            limit: 3,
            order: [                
                ['_pid', 'DESC']
            ],
        }).then(function (results) {

            rs = JSON.parse(JSON.stringify(results));
            for (let i in rs) {
                result.push(rs[i]);
            }

            // console.log('최종 result : ' + JSON.stringify(result))
            res.json(results);
        }).catch(function (err) {
            console.log("finAll()에러 발생")
            //TODO: error handling
            // return next(err);
        });

        
    });

    

    //넌 뭔데 같은게 두개나
    

    

}