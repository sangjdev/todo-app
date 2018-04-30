const router = require('express').Router();
const ctrl   = require('./post.ctrl');

//글 목록, 글 한개, 추가, 수정, 
router.get('/post/:postId', ctrl.post);
router.get('/info/:postId', ctrl.info);
router.post('/add', ctrl.add);
router.post('/edit/:postId', ctrl.editSglPost);

//페이징처리를 위한 카운팅
router.get('/count', ctrl.postCount);

//메뉴
router.get('/menu', ctrl.menu);

module.exports = router;