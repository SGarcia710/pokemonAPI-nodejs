const app = require("./app");
const server = require("http").Server(app);

const config = require("./assets/config");

const port = config.PORT;
server.listen(port, () => {
  console.log("App listening...");
  console.log("Host: http://localhost:" + port);
});
