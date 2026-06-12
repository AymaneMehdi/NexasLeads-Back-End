const express = require('express');
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  getCounts,
  getBlogCreationDates,
} = require('../controllers/statisticsController');

router.get('/stats/counts', auth, getCounts);

router.get('/stats/blog-creation-dates', auth, getBlogCreationDates);

module.exports = router;
