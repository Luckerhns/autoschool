const jwt_decode = require("jwt-decode");
const ApiError = require("../middlewares/ApiError");

class ProfileController {
  async profile(req, res, next) {
    const { token } = req.body;
    const user = await jwt_decode(token);
    if (!user.email || !user.id || !user) {
      return next(ApiError.badRequest("Not valid token"));
    }
    return res.json(user);
  }
}

module.exports = new ProfileController();
