module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define('userinfo', {
        _uid: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: '_uid'},
        user_id: {type: DataTypes.STRING, field: 'user_id'},
        user_pw: {type: DataTypes.STRING, field: 'user_pw'},
        user_email: {type: DataTypes.STRING, field: 'user_email'}
    });

    // sequelize.sync()
    //     .then(() => User.create({
    //         username: 'janedoe',
    //         birthday: new Date(1980, 6, 20)
    //     }))
    //     .then(jane => {
    //         console.log(jane.toJSON());
    //     });

    return User;
};