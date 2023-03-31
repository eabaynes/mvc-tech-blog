const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');
const profileRoutes = require('./profile-route.js');

router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/api', apiRoutes);

module.exports = router;