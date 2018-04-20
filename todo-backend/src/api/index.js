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
        console.log("db : " + db);
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

        console.log(getYMD());

        console.log('title : ' + title + ',' + content + ',' + cate + ',' + prior);
        console.log('리디렉션 전')
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


        console.log('리디렉션 후')
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

    app.get('/post', function (req, res, next) {

        const db = require('../models'); // sequelize 세팅

        // db.sequelize
        //     .sync({ force: false }) // 테이블 생성
        //     .then(function () {
        //         console.log('DB 연결 성공');
        //     }).catch(function (e) {
        //         throw new Error('DB 연결 실패: ' + e);
        //     });
        let result = {};
        
        db.postinfo.findAll().then(function (results) {
            
            result = JSON.parse(JSON.stringify(results));
            console.log("result :::: " + result)
            
            res.json(results);
        }).catch(function (err) {
            console.log("finAll()에러 발생")
            //TODO: error handling
            return next(err);
        });
        

        db.sequelize.query("SELECT COUNT(*) as cnt, post_cate FROM test.postinfo GROUP BY post_cate")
            .then(function (results) { // .sequelize.query('SQL 쿼리 작성 ... 현재는 간단한 join문         
                let tmp = results[0][0];
                let obj = {};
                console.log('tmp : '+ tmp);          
                for(let i in tmp){
                    obj[i] = tmp;
                    console.log('i : '+ i);
                    console.log('tmp : '+ tmp);
                }
                // console.log('obj 1 : ' + obj[cnt]);
                console.log('obj 2 : ' + obj[post_cate]);
                // console.log(JSON.parse(results[0][0]));
                // result['123'] = 0;
                // arr.push(results);
                // console.log(arr)
                // res.json(results[0]); // 결과는 배열형태로 받는다.
                // res.json(result);
                // result.push(tmp);
                console.log("result :::: " + result);
            }).catch(function (err) {
                return next(err);
            })                
    })

    app.get('/post/:postId', function (req, res) {
        5

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