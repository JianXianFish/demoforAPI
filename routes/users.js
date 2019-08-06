const router = require('koa-router')();
const UserController = require('../controllers/user');

router.prefix('/api/')

/**
 * 用户接口
 */
//注册用户
router.post('/user/register', UserController.create);

//获取对应的用户
router.get('/user/:id', UserController.detail);

module.exports = router
