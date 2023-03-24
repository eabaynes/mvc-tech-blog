const homeRoute = require('./home-route.js');
const profileRoute = require('./profile-route.js');
const apiRoutes = require('./api-routes');
const router = require('express').Router();

// default home route
router.use('/', homeRoute);
// profile route
router.use('/profile', profileRoute);
// api routes
router.use('/api', apiRoutes);

module.exports = router;