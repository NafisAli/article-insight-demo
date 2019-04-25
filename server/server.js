const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const server = express();
const userRoutes = require("./routes/user.routes");
const config = require("./config/application");
const database = require("./config/database");
const verifyToken = require("./service/auth");

// Setup logger
server.use(logger("dev"));

// Setup JWT Key
server.set("secretKey", config.JWT_SECRET);

// Setup body parser
server.use(bodyParser.json());

// Default route
server.get("/", (request, response) => {
  response.json({ tutorial: "this is a test" });
});

// Server startup
server.listen(config.PORT, () => {
  console.log(`Server started on port: ${config.PORT}`);
});

// Database connection
database.connection.on("error", error => console.log(error));
database.connection.once("open", () => {
  server.use("/user", userRoutes);
  server.get("/overview", verifyToken, (request, response) => {
    response.json({ status: "Success", message: "Route accessed with authorization", data: null });
  });
  console.log("Database connected");
});
