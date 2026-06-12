const express = require('express');
const router = express.Router();
const controller = require('../controllers/partnerController')
const auth = require("../middlewares/auth");

router.get('/',controller.getAllPartners);
router.get('/:id',controller.getOnePartner);
router.post('/',auth,controller.createPartner);
router.put('/:id',auth,controller.updatePartner);
router.delete('/:id',auth,controller.deletePartner);

module.exports = router;
