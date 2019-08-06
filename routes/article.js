const router = require('koa-router')();
const ArtileController = require('../controllers/article');

router.prefix('/api/')

/**
 * 文章接口
 */
//创建文章
router.post('/article/create', ArtileController.create);

//获取文章详情
router.get('/article/:id', ArtileController.detail);

module.exports = router
