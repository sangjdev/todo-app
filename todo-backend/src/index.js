var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const mysql2 = require('mysql2');
const passport = require('passport');
const passportConfig = require("./passport/");
const cookieParser = require('cookie-parser')
// const dbconfig   = require('./configs/database.js');
// const pool = mysql.createPool(dbconfig);

app.set('port', process.env.PORT || 3000);

//뷰 경로 지정을 위한 정보
// app.set('views', (path.resolve('.','../','todo-app','todo-backend','views')));
// app.set('views', (path.resolve(__dirname + '../' +'/views')));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

//뷰에서 사용할 css 
// app.use(express.static(__dirname + '/public'));

app.use(cookieParser());

//body 파서 아주 중요함67
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//세션 설정
app.use(session({
    key: 'sid',
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 // 쿠키 유효기간 1시간
    }
}));

app.use(cors({credentials: true, origin: 'http://localhost:8080'}));

//사용자 요청에 대한 라우팅
// var router = require('./api/index')(app, fs);

app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// app.use(function (req, res, next) {
//     var allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
//     var origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//         res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     res.header('Access-Control-Allow-Credentials', true);
//     return next();
// });

app.use(require('./api'));
// app.use('/api', require('./api'));
//여기부터
app.get('/setCookie', function (req, res) {
    res.cookie('string', 'cookie').send('hello');
    // res.redirect('/getCookie');
})

app.get('/getCookie', function (req, res) {
    console.log(req.cookies);
    res.send(req.cookies);
})

app.get('/clearCookie', function (req, res) {
    res.clearCookie('string');
    res.send('clear');
})

app.get('/', function (req, res) {

    res.send('hello world');
})
//여기까지 테스트코드

//서버 시작
app.listen(app.get('port'), function () {

    console.log('express server has started on port 3000');
});
/**
 * 0. 서버에서 cnosole 찍어보기 (서버의 동작원리와 서버의 장점)
 * 1. 기본적인 제어문
 * 1.5 사용자의 요청에 대한 응답 내보내기
 * 1.6 응답을 내보낼때 dom을 그리는 것이 아니라 vue.js 를 통한 프론트엔드 처리
 * 1.65 Gulp
 * 1.7 JSX 배우기 virtual dom
 * 2. 모듈 만들어서 import
 * 3. import 하기윈한 es6
 * 4. es6를 사용하기 위한 babel설정
 * 5. babel을 사용해서 완벽하게 vue.js 테스트하기
 * 6. db에 CRUD 하기
 * 7. 기본적인 rdb 가 아닌 사용자의 인증,권한 체크를 할 수 있게 해주느 no-sql 익혀보기
 * 8. firebase, mongo-db 익히기.
 * ================================================================
 * 0. 백엔드와 프론트엔드의 대한 기초 완성.
 * 1. Material Designed Bootstrap을 통한 퍼블리싱
 * 2. blog 만들기
 * 3. 블로그에 사용한 사진은 트렐로 공유방에 있는 무료 좋은이미지 갖다쓰기
 * 4. blog 만들고 여태까지 블로그를 만들면서 얻게 된 백엔드 / 프론트엔드 기술들을 파트를 나눠서 정리하기
 * 5. blog 프로젝트가 끝난후. 새로운 프로젝트 하나 더 해보기. HTML5의 웹소켓을 이용한 NIO 소켓통신을 빠르게 처리하기.
 * ================================================================
 * 0. Vue.js Native 웹앱 만들기
 * ================================================================
 * 0. Anguler.js React.js를 Vue.js와 연관시켜서 공부하기
 * ================================================================
 * 0. TypeScript 공부하기
 * 
 * 
 * @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 * 중간중간 하다가 참조할 수 있는 사이트 Velopert 블로그, 구글 네이버 블로그, FastCampus 커리큘럼 한국자료로 나온책들 커리큘럼 다 찾아보기
 * 정말 한국자료들을 다 읽어보게 된다면 외국원본 API 나 Example 있는데로 다 찾아보기.
 */
