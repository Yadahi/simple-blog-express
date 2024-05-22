const getHomePage = (req, res, next) => {
  res.render("blog/homepage", { pageTitle: "My Blog", articles: [] });
};

module.exports = {
  getHomePage,
};
