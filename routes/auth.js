const router = require('express').Router();
const ctrl = require('../controllers');
// const authRequired = require('../middleware/authRequired');

router.post('/register', ctrl.auth.register);

module.exports = router;