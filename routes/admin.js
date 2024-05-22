const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/dashboard", adminController.getAdminDashboard);

router.get("/add-article", adminController.getAddArticle);
router.post("/add-article", adminController.postAddArticle);

router.get("/edit-article/:articleId", adminController.getEditArticle);
router.post("/edit-article", adminController.postEditArticle);

router.get("/delete-article/:articleId", adminController.getDeleteArticle);

module.exports = router;
