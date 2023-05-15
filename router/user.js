const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/user')


router.get("/", controllerUser.get);
router.get("/:id", controllerUser.getById);
router.post("/", controllerUser.post);

module.exports = router;