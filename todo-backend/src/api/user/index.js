const router = require('express').Router();
const ctrl   = require('./user.ctrl');
const passport = require('passport');

//회원가입, 로그인
router.post('/register', ctrl.register);
// router.post('/login',passport.authenticate('local', {
//     failureRedirect: '/123'
// }), ctrl.login);
router.post('/login', ctrl.login2);
router.post('/cc', ctrl.login3);
module.exports = router;