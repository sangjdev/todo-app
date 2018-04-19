module.exports = function (app, fs) {

    const model = require('../models/index.js');

    app.get('/', function (req, res) {

        console.log('root directory 실행');

        res.render('index.html');
    })

    app.post('/post/add', function (req, res) {

        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

        console.log('post/add들어옴');

        var db = require('../models'); // sequelize 세팅
        db.sequelize
            .sync({force: false}) // 테이블 생성
            .then(function () {
                console.log('DB 연결 성공');
            }).catch(function (e) {
                throw new Error('DB 연결 실패: ' + e);
            });

        db.userinfo.findAll().then(function(results) {

            console.log("results : " + results);
            res.json(results);
        }).catch(function(err) {
            console.log("finAll()에러 발생")
            //TODO: error handling
        });

        let result = {};
        let title = req.body['title'];
        let content = req.body['content'];
        let cate = req.body['optioncate'];
        let prior = req.body['optionprior'];

        console.log('title : ' + title + ','+ content + ',' + cate +',' + prior);

        // model.add();

        // pool.getConnection(function (err, connection) {

        // let sql = "INSERT INTO`test`.`postinfo` ( `post_title`, `post_content`, `post_date`, `post_cate`, `user_id`, `post_prior`, `use_yn`) VALUES ?";
        // let value = ('title','content','201804131120','node.js','sangj','1','y');

        //     connection.query(sql, value, function (err, rows, fields) {
        //         if (!err) {
        //             console.log('The solution is: ', rows[0]);
        //             res.send(rows);
        //         } else {
        //             console.log('Error while performing Query.', err);
        //         }
        //         connection.release();
        //     });
        // })
    })

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
    })

}