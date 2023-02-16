const express = require('express');
const router = express.Router();
const AdministratorController = require('../../controllers/adminController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(AdministratorController.getAllAdministrator)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), AdministratorController.createNewAdministrator)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), AdministratorController.updateAdministrator)
    .delete(verifyRoles(ROLES_LIST.Admin), AdministratorController.deleteAdministrator);

router.route('/:id')
    .get(AdministratorController.getAdministrator);

module.exports = router;
