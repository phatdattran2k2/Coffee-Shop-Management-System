const makeDrinkService = require("../services/drinks.service.js");
const ApiError = require("../api-error");

async function createDrink(req, res, next) {
  console.log(req.body);

  if (!req.body?.TEN_SP) {
    return next(new ApiError(400, "Name can not be empty"));
  }

  try {
    const DrinkService = makeDrinkService();
    const drink = await DrinkService.createDrink(req.body);
    return res.send(drink);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the drink")
    );
  }
}

async function get_quantity(req, res, next) {
  try {
    const contactsService = makeDrinkService();
    const quantity = await contactsService.get_quantity();
    return res.send(quantity);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while creating the contact")
    );
  }
}

async function updateDrinkController(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }
  console.log(req.body);
  try {
    const DrinkService = makeDrinkService();
    const updated = await DrinkService.updateDrink(req.params.id, req.body);
    if (!updated) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({
      status: true,
      message: "Drink was updates successfully ",
    });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "Error updating contact with id=${req.params.id}")
    );
  }
}

async function getDrinkByFilter(req, res, next) {
  let drinks = [];

  try {
    const DrinkService = makeDrinkService();
    drinks = await DrinkService.getManyDrinks(req.query);
    return res.send(drinks);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "An error occurred while retriveving drinks")
    );
  }
}

async function getDrink(req, res, next) {
  try {
    const DrinkService = makeDrinkService();
    const drink = await DrinkService.getDrinkById(req.params.id);
    if (!drink) {
      return next(new ApiError(404, "Drink not found"));
    }
    return res.send(drink);
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, "Error retrieving drink with id=${req.params.id}")
    );
  }
}

async function deleteDrink(req, res, next) {
  try {
    const DrinkService = makeDrinkService();
    const deleted = await DrinkService.deleteDrink(req.params.id);
    if (!deleted) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Drink was deleted successfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Could not delete drink with id=${req.params.id}`)
    );
  }
}

module.exports = {
  get_quantity,
  createDrink,
  getDrinkByFilter,
  getDrink,
  updateDrinkController,
  deleteDrink,
};
