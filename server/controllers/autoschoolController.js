const { AutoschoolStudent } = require("../DataBase/models");

class AutoSchool {
  async sendBlank(req, res, next) {
    const { name, email, answers } = req.body;
    // const candidate = await AutoschoolStudent.findOne({ where: { email } });
    // if (candidate) {
    //   return res.json({ message: "Вы уже отправляли заявку, попробуй позже" });
    // } else {
    const student = await AutoschoolStudent.create({ name, email, answers });

    return res
      .status(200)
      .json({
        student,
        message: "Отлично, мы в ближайшее время рассмотрим вашу заявку!",
      });
  }
}
// }

module.exports = new AutoSchool();
