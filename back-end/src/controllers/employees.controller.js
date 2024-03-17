const makeEmployeeService = require("../services/employees.service.js");
const ApiError = require("../api-error");

async function createEmployee(req, res, next) {
  console.log(req.body);

  if (!req.body?.TEN_NV) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const EmployeeService = makeEmployeeService();
    const employee = await EmployeeService.createEmployee(req.body);
    return res.send(employee);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the employee")
    );
  }
}

async function get_quantity(req, res, next) {
  try {
    const contactsService = makeEmployeeService();
    const quantity = await contactsService.get_quantity();
    return res.send(quantity);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
}

async function updateEmployeeController(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  console.log(req.body);
  try {
    const EmployeeService = makeEmployeeService();
    const updated = await EmployeeService.updateEmployee(
      req.params.id,
      req.body
    );
    if (!updated) {
      return next(new ApiError(404, "Employee not found"));
    }
    return res.send({
      status: true,
      message: "Employee was updates successfully ",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "Error updating Employee with id=${req.params.id}")
    );
  }
}

async function getEmployeeByFilter(req, res, next) {
  let employees = [];

  try {
    const EmployeeService = makeEmployeeService();
    employees = await EmployeeService.getManyEmployees(req.query);
    return res.send(employees);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retriveving employees")
    );
  }
}

async function getEmployee(req, res, next) {
  try {
    const EmployeeService = makeEmployeeService();
    const employee = await EmployeeService.getEmployeeById(req.params.id);
    if (!employee) {
      return next(new ApiError(404, "Employee not found"));
    }
    return res.send(employee);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "Error retrieving employee with id=${req.params.id}")
    );
  }
}

async function deleteEmployee(req, res, next) {
  try {
    const EmployeeService = makeEmployeeService();
    const deleted = await EmployeeService.deleteEmployee(req.params.id);
    if (!deleted) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Employee was deleted successfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Could not delete employee with id=${req.params.id}`)
    );
  }
}

module.exports = {
  get_quantity,
  createEmployee,
  getEmployeeByFilter,
  getEmployee,
  updateEmployeeController,
  deleteEmployee,
};
