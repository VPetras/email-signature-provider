const express = require("express");
const path = require("path");

const app = express();
app.engine("html", require("ejs").renderFile);

app.get("/", (req, res) => {
  //send html
  res.send("<h1>Home Page</h1>");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.render(path.join(__dirname, "/templates/email.html"), { name: id });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
