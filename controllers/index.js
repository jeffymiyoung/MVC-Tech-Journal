// imports
const router = require('express').Router();

// API imports
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes.js');

// router endpoints
router.use('/api', apiRoutes);

router.use('/', homeRoutes);

router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

// exports 
module.exports = router;