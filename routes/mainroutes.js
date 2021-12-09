const express= require('express');
const mainControllers = require('../controllers/mainControllers');
const router = express.Router();

router.get('/', mainControllers.getMainPage);

router.get('/getdate', mainControllers.getDate);

router.get('/weekday', mainControllers.getWeekday);

router.post('/', mainControllers.postWish)

module.exports = router;