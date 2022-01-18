const router = require("express").Router();
const controller = require("../../controller/authController/auth.controller");

router.post("/sign-up", controller.createUser);

module.exports = router;
