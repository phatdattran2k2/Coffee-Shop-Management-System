const express = require("express");
const drinksController = require("../controllers/drinks.controller");
const router = express.Router();
const { methodNotAllowed } = require("../controllers/errors.controller");

router
  .route("/")
  .get(drinksController.getDrinkByFilter)
  .post(drinksController.createDrink)
  .all(methodNotAllowed);

router
  .route("/quantity_drinks")
  .get(drinksController.get_quantity)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(drinksController.getDrink)
  .put(drinksController.updateDrinkController)
  .delete(drinksController.deleteDrink)
  .all(methodNotAllowed);

module.exports = router;
