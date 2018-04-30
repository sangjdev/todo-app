// module.exports = function (app, fs) {

//     const model = require('../models/index.js');
//     const crypto = require('crypto');

//     // router.get('/', function (req, res) {

//     //     console.log('root directory 실행');

//     //     res.send('rest api dev root')
//     // })   
// }
const router = require('express').Router();
const post   = require('./post');
const user   = require('./user');
// const auth   = require('./auth');

router.use('/post', post);
router.use('/user', user);
// router.use('/auth', auth);

module.exports = router;