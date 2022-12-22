const Router = require("express");
const profileController = require("../../controllers/profileController");
const router = new Router();

router.post("/profile", profileController.profile);

module.exports = router;
