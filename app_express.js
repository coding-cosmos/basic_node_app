const express = require("express");
const getPage = require("./scripts/getPage");
const app = express();

app.get("/", (req, res) => {
  getPage("index.html", res);
});
app.get("/about", (req, res) => {
  getPage("about.html", res);
});
app.get("/contact", (req, res) => {
  getPage("contact-me.html", res);
});
app.use((req, res) => {
  getPage("404.html", res);
});

app.listen(3000, () => {
  console.log("The server is running");
});
