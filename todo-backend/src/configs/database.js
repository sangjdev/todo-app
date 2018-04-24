//데이터베이스 연결을 위한 접속정보
const Sequelize = require('sequelize');

module.exports = {
    // host : '127.0.0.1',
    // user : 'root',
    // password : 'root',
    // port : 3306,
    // database : 'test',
    // connectionLimit : 20,
    // waitForConnections: false   

    
    sequelize = new Sequelize(
        'todo', // 데이터베이스 이름
        'root', // 유저 명
        'root', // 비밀번호
        {
            'host': 'localhost', // 데이터베이스 호스트
            'dialect': 'mysql' // 사용할 데이터베이스 종류
        }
    )

    // sequelize = new Sequelize('mysql://root:1234@localhost/test');
};


