const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);
router.get('/index.html', ctrlMain.index);
router.get('/about', ctrlMain.about);

module.exports = router;