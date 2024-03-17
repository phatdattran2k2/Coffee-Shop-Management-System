const express = require("express");
const contactsController = require("../controllers/contacts.controller");
const router = express.Router();
const { methodNotAllowed } = require("../controllers/errors.controller");

router
  .route("/")
  .get(contactsController.getContactsByFilter)

  .post(contactsController.createContact)
  .delete(contactsController.deleteAllContacts)
  .all(methodNotAllowed);

router
  .route("/quantity_cus")
  .get(contactsController.get_quantity)
  .all(methodNotAllowed);

router
  .route("/:id")
  .get(contactsController.getContact)
  // .put(contactsController.updateContact)
  .all(methodNotAllowed);

// router.route("/login").post(contactsController.login).all(methodNotAllowed);

module.exports = router;
