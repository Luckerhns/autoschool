const Router = require("express");
const router = new Router();
const userRouter = require("./mainRoutes/userRoute");
const newsRouter = require("./mainRoutes/newsRoute");
const autoschoolRouter = require("./mainRoutes/autoschoolRoute");
const profileRouter = require("./mainRoutes/profileRoute");

router.use("/user", userRouter);
router.use("/user", profileRouter);
router.use("/news", newsRouter);
router.use("/KST_autoschool", autoschoolRouter);

module.exports = router;
