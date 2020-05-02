const express = require('express');

//Setting up express router
const router = express.Router();
const adminController = require('../../controllers/api/admin_controller');

//admin resetall route
router.put('/resetall', adminController.resetall);

module.exports = router;