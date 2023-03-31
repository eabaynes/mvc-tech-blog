const router = require('express').Router();
const commentRoutes = require('./comment-route.js');
const postRoutes = require('./post-route.js');
const userRoutes = require('./user-route.js');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;