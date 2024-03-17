const express = require("express");
const billsController = require("../controllers/bills.controller");
const router = express.Router();
const { methodNotAllowed } = require("../controllers/errors.controller");

router.route("/").get(billsController.getbill).all(methodNotAllowed);

router.route("/cthd").get(billsController.get_cthd).all(methodNotAllowed);

router.route("/thucthu").get(billsController.get_thucthu).all(methodNotAllowed);

router.route("/doanhthu").get(billsController.get).all(methodNotAllowed);

router
  .route("/bestseller")
  .get(billsController.get_MA_SP)
  .all(methodNotAllowed);

module.exports = router;
