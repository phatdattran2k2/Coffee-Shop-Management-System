const makeAdminService = require("../services/admins.service.js");
const ApiError = require("../api-error");

async function createAdmin(req, res, next) {
  console.log(req.body);
  if (!req.body?.name) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const AdminService = makeAdminService();
    const admin = await AdminService.createAdmin(req.body);
    return res.send(admin);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
}

async function logInController(req, res, next) {
  try {
    const { email, pw } = req.body;
    const AdminService = makeAdminService();
    const checkAdmin = await AdminService.logIn(email);
    if (checkAdmin && checkAdmin.MAT_KHAU_ADMIN === pw) {
      res.json({
        status: "success",
        message: "Login check correct",
        // admin: checkAdmin,
      });
    } else {
      res.json({ status: "failure", message: "Login check failure" });
    }
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
}

async function getAdminByFilter(req, res, next) {
  let admins = [];

  try {
    const AdminService = makeAdminService();
    admins = await AdminService.getManyAdmins(req.query);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retriveving contacts")
    );
  }

  return res.send(admins);
}

async function getAdmin(req, res, next) {
  try {
    const AdminService = makeAdminService();
    const admin = await AdminService.getAdminById(req.params.id);
    if (!admin) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send(admin);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "Error retrieving contact with id=${req.params.id}")
    );
  }
}

module.exports = {
  createAdmin,
  getAdminByFilter,
  getAdmin,
  logInController,
};
