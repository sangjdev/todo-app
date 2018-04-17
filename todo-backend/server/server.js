var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');
var path = require('path');
// var mysql = require('mysql');
// var dbconfig   = require('./config/database.js');
// var connection = mysql.createConnection(dbconfig);

app.set('port', process.env.PORT || 3000);

//뷰 경로 지정을 위한 정보
app.set('views', (path.resolve('.','../','todo-app','todo-backend','views')));
// app.set('views', (path.resolve(__dirname + '../' +'/views')));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//뷰에서 사용할 css 
app.use(express.static(__dirname + '/public'));

//body 파서 아주 중요함67
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//세션 설정
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

//사용자 요청에 대한 라우팅
var router = require('../router/main')(app, fs);

//서버 시작
var server = app.listen(app.get('port'), function () {

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
