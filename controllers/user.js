const UserModel = require("../modules/user");

class UserController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        //接收客服端
        let req = ctx.request.body;
        if (req.username && req.password) {
            try {
                //创建用户模型
                const ret = await UserModel.createUser(req);
                //使用刚刚创建的用户ID查询用户，且返回用户详情信息
                const data = await UserModel.getUserByID(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '注册成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: '注册失败',
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全'
            }
        }
    }

    /**
     * 获取对应用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;
        if (id) {
            try {
                // 查询用户详情模型
                let data = await UserModel.getUserByID(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: 'success',
                    data: data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 412,
                    msg: 'error',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 416,
                msg: 'ID必须传'
            }
        }
    }
}

module.exports = UserController;
