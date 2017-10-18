const Express = require('express');
const router = Express.Router();

const requestLogger = require('./middlewares/requestLogger');

const HomeCtrl = require('./controllers/home');
const home = new HomeCtrl();

router.use(requestLogger);
router.get('/', home.getHome);

module.exports = router;