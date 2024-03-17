const express = require("express");
const cors = require("cors");

const {
  resourceNotFound,
  handleError,
} = require("./controllers/errors.controller");

const app = express();
app.use(cors());
app.use(express.json());

const contactsRouter = require("./routes/contacts.router");
const adminsRouter = require("./routes/admins.router");
const drinksRouter = require("./routes/drinks.router");
const employeesRouter = require("./routes/employees.router.js");
const billsRouter = require("./routes/bills.router.js");

app.use("/api/contacts", contactsRouter);
app.use("/api/admins", adminsRouter);
app.use("/api/drinks", drinksRouter);
app.use("/api/employees", employeesRouter);
app.use("/api/bills", billsRouter);

// Xử lý lỗi 404.
app.use(resourceNotFound);
// Định nghĩa middleware xử lý lỗi sau cùng.
app.use(handleError);

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to contact book application." });
// });

// // Tài nguyên contacts có đường dẫn URL bắt đầu với /api/contacts
// app.use("/api/contacts", contactsRouter);

module.exports = app;
