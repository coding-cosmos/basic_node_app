const http = require("node:http");

const loadPage = require("./scripts/loadPage");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("server started accepting requests");
  console.log(req.url);

  switch (req.url) {
    case "/": {
      loadPage("index.html", res);
      break;
    }

    case "/about": {
      loadPage("about.html", res);
      break;
    }
    case "/contact": {
      loadPage("contact-me.html", res);
      break;
    }

    default: {
      loadPage("404.html", res);
      break;
    }
  }
});

server.listen(3000, () => {
  console.log("server started");
});
