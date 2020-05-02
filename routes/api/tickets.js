const express = require('express');

//Setting up express router
const router = express.Router();
const ticketController = require('../../controllers/api/ticket_controller');

//All routes
router.post('/book', ticketController.bookTicket);
router.patch('/update/:id', ticketController.update);
router.get('/viewstatus/:id', ticketController.viewStatus);
router.get('/viewdetails/:id', ticketController.viewDetails);
router.get('/viewopen', ticketController.viewOpen);
router.get('/viewclose', ticketController.viewClose);

module.exports = router;