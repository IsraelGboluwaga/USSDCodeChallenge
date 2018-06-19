const router = require('express').Router();
const {requestHandler} = require('./controllers/index.controller');

router.get('/initiate', requestHandler);

module.exports = router;