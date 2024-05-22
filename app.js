const express = require("express");

const app = express();
const port = 3000;

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const articlesRouter = require("./routes/articles");

app.use(indexRouter);
app.use("/admin", adminRouter);
app.use("/articles", articlesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
