module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define('postinfo', {
        _pid: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: '_pid'},
        post_title: {type: DataTypes.STRING, field: 'post_title'},
        post_content: {type: DataTypes.STRING, field: 'post_content'},
        post_date: {type: DataTypes.STRING, field: 'post_date'},
        post_cate: {type: DataTypes.STRING, field: 'post_cate'},
        user_id: {type: DataTypes.STRING, field: 'user_id'},
        post_prior: {type: DataTypes.STRING, field: 'post_prior'},
        use_yn: {type: DataTypes.STRING, field: 'use_yn'}
    });

    return Post;
};