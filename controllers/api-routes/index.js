const commentRoutes = require('./comment-route.js');
const postRoutes = require('./post-route.js');
const userRoutes = require('./user-route.js');
const router = require('express').Router();

// Add prefix of `/comments` to routes created in `comment-routes.js`
router.use('/comments', commentRoutes);
// Add prefix of `/posts` to routes created in `post-routes.js`
router.use('/posts', postRoutes);
// Add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

module.exports = router;