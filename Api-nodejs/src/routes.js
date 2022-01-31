const Router = require("express");

const LoginController = require("./App/Controllers/LoginController");
const UserController = require("./App/Controllers/UserController");
const AuthMiddleware = require("./App/Middlewares/AuthMiddleware");

const routes = new Router();

routes.post("/login", LoginController.index);
routes.get("/users", AuthMiddleware, UserController.index);
routes.delete("/users/:id", AuthMiddleware, UserController.delete);
routes.put("/users/:id", AuthMiddleware, UserController.update);
routes.post("/register",AuthMiddleware , UserController.store);

module.exports = routes;