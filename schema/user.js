const moment = require("moment");
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true
        },
        //用户名
        username: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'username'
        },
        //密码
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'password'
        },
        //登录时间
        loginTime: {
            type: DataTypes.DATE,
        }
    }, {
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    });
}
