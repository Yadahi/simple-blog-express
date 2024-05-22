const express = require("express");

const app = express();
const port = 3000;

const errorController = require("./controllers/errorController");

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const articlesRouter = require("./routes/articles");

// This line tells Express to use EJS (Embedded JavaScript) as the templating engine.
app.set("view engine", "ejs");
// This line sets the directory where your EJS templates (views) are located.
app.set("views", "views");

app.use(indexRouter);
app.use("/admin", adminRouter);
app.use("/articles", articlesRouter);

app.use(errorController.get404);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
