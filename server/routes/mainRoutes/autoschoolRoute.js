const Router = require("express");
const autoschoolController = require("../../controllers/autoschoolController");
const router = new Router();

router.post("/student_blank", autoschoolController.sendBlank);

module.exports = router;
