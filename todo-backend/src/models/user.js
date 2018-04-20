module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('userinfo', {
        _uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: '_uid'
        },
        user_id: {
            type: DataTypes.STRING,
            field: 'user_id'
        },
        user_pw: {
            type: DataTypes.STRING,
            field: 'user_pw'
        },
        user_email: {
            type: DataTypes.STRING,
            field: 'user_email'
        }
    });

    //인덱스 추가???? b-tree 인덱스 걸어보기 성능 벤치마킹 해보기.

    return User;
};