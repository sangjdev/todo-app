const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // },
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

var db = {};

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

// Object.keys(db).forEach(function (modelName) {
//     console.log('modelName : ' + modelName);
//     console.log('db[modelName] : ' + db[modelName]);
//     if ('associate' in db[modelName]) {
//         db[modelName].associate(db);
//     }
// });
//associate 가 sequelize에서 어떤 역할을 하는지 알아보기~!

// db['post'] = sequelize.import(path.join(__dirname, 'post.js'));

// db.sequelize
//   .sync() // 테이블 생성
//   .then(function () {
//     console.log('DB 연결 성공');
//   }).catch(function (e) {
//     throw new Error('DB 연결 실패: '+e);
//   });

// db['post'].findAll().then(function(results) {
//     res.json(results);
// }).catch(function(err) {
//     //TODO: error handling
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;