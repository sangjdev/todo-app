const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
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
Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

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