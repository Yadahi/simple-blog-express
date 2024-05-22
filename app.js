const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const errorController = require("./controllers/errorController");

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const articlesRouter = require("./routes/articles");

// EJS configuration
// This line tells Express to use EJS (Embedded JavaScript) as the templating engine.
app.set("view engine", "ejs");
// This line sets the directory where your EJS templates (views) are located.
app.set("views", "views");

// This line tells Express to serve static files from the "public" directory.
// The line app.use(express.static(path.join(__dirname, "public")));
// serves static files, such as images, CSS, and JavaScript, from the directory named "public" in your project.
app.use(express.static(path.join(__dirname, "public")));

app.use(indexRouter);
app.use("/admin", adminRouter);
app.use("/articles", articlesRouter);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
