const Router = require("express");
const newsController = require("../../controllers/newsController");
const router = new Router();

router.get("/mainNews", newsController.allnews);

module.exports = router;
