const getAdminDashboard = (req, res, next) => {
  res.send("Admin Page");
};

const getAddArticle = (req, res, next) => {
  res.render("admin/edit-article", { pageTitle: "Add Article" });
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

const getDeleteArticle = (req, res, next) => {
  res.send("Delete Article");
};

module.exports = {
  getAdminDashboard,
  getAddArticle,
  getEditArticle,
  postAddArticle,
  postEditArticle,
  getDeleteArticle,
};
