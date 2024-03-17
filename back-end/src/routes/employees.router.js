const express = require("express");
const employeesController = require("../controllers/employees.controller");
const router = express.Router();
const { methodNotAllowed } = require("../controllers/errors.controller");

router
  .route("/")
  .get(employeesController.getEmployeeByFilter)
  .post(employeesController.createEmployee)
  .all(methodNotAllowed);

router
  .route("/quantity_employees")
  .get(employeesController.get_quantity)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(employeesController.getEmployee)
  .put(employeesController.updateEmployeeController)
  .delete(employeesController.deleteEmployee)
  .all(methodNotAllowed);

module.exports = router;
