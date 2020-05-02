const express = require('express');

//Setting up express router
const router = express.Router();

const ticketRouter = require('./api/tickets');
const adminRouter = require('./api/admin');

//Routes
router.use('/tickets', ticketRouter);
router.use('/tickets/admin', adminRouter);

module.exports = router;