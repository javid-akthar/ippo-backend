const express = require('express');
const router = express.Router();

const strongPasswordController = require('../../../controllers/api/v1/strong_password_controller');

router.post('/validate', strongPasswordController.strongPasswordValidate);
router.get('/', strongPasswordController.getStrongPasswordData);
// router.delete('/:optionid/delete',optionsController.deleteOption);
module.exports = router;