import homeRoute from './home-route.js';
import profileRoute from './profile-route.js';
import apiRoutes from './api-routes';
const router = require('express').Router();

// default home route
router.use('/', homeRoute);
// profile route
router.use('/profile', profileRoute);
// api routes
router.use('/api', apiRoutes);

export default router;