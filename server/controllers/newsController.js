class NewsController {
  async allnews(req, res, next) {
    const data = "Last date";
    return res.json({ data });
  }
}

module.exports = new NewsController();
