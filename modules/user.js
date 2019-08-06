// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const User = Sequelize.import('../schema/user');
User.sync({force: false}); //自动创建表

class UserModel {
    /**
     * 创建用户模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data) {
        return await User.create({
            username: data.username,
            password: data.password
        });
    }

    /**
     * 查询用户的详情
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getUserByID(id) {
        return await User.findOne({
            where: {
                id
            }
        });
    }
}

module.exports = UserModel;
