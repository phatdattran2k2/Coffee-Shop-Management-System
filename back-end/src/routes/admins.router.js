const express = require("express");
const adminsController = require("../controllers/admins.controller");
const router = express.Router();
const { methodNotAllowed } = require("../controllers/errors.controller");

router
  .route("/")
  .get(adminsController.getAdminByFilter)
  .post(adminsController.logInController)
  .all(methodNotAllowed);

router.route("/:id").get(adminsController.getAdmin).all(methodNotAllowed);

module.exports = router;
