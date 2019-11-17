const router = require('express').Router();
const resourceController = require('./resourceController');

router.get('/', resourceController('controllerMethod'));

module.exports = router;