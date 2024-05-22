const getAdminDashboard = (req, res, next) => {
  res.send("Admin Page");
};

const getAddArticle = (req, res, next) => {
  res.send("Add Article");
};

const postAddArticle = (req, res, next) => {
  res.send("Add Article");
};

const getEditArticle = (req, res, next) => {
  res.send("Edit Article");
};

const postEditArticle = (req, res, next) => {
  res.send("Edit Article");
};

module.exports = {
  getAdminDashboard,
  getAddArticle,
  getEditArticle,
  postAddArticle,
  postEditArticle,
};
