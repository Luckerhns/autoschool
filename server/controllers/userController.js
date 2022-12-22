const ApiError = require("../middlewares/ApiError");
const { User } = require("../DataBase/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWT = (id, email, role, username) => {
  return jwt.sign({ id, email, role, username }, process.env.SECRET, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { username, email, password } = req.body;
    if (!email || !password) {
      return next(
        ApiError.badRequest("Username or email or password is incorrect")
      );
    }
    const candidate = await User.findOne({ where: { email, username } });
    if (candidate) {
      return next(ApiError.badRequest("This name or email has alredy used"));
    } else {
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });
      const token = generateJWT(user.id, user.email, user.role, user.username);
      return res.json({ token });
    }
  }
  async login(req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.badRequest("Incorrect password in login!"));
    } else {
      const token = generateJWT(user.id, user.email, user.role, user.username);
      return res.json({ token });
    }
  }
}

module.exports = new UserController();
