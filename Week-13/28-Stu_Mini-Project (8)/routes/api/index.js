const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');

router.use('/travel', travelerRoutes);

module.exports = router;