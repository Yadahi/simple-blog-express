const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/dashboard", adminController.getAdminDashboard);

router.get("/add-article", adminController.getAddArticle);
router.post("/add-article", adminController.postAddArticle);

router.get("/edit-article", adminController.getEditArticle);
router.post("/edit-article", adminController.postEditArticle);

module.exports = router;
