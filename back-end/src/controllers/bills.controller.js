const billService = require("../services/bills.service.js");

module.exports = {
  getbill: async (req, res) => {
    try {
      const bill = await billService.getAllHoaDon();
      res.json(bill);
    } catch (error) {
      console.error("Error getting bill:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  get_cthd: async (req, res) => {
    try {
      const cthd = await billService.getAll_cthd();
      res.json(cthd);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  get: async (req, res) => {
    try {
      const doanhthu = await billService.get_doanhthu();
      res.json(doanhthu);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  get_MA_SP: async (req, res) => {
    try {
      const best_seller = await billService.get_bestseller();
      res.json(best_seller);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  get_thucthu: async (req, res) => {
    try {
      const thucthu = await billService.getAll_thucthu();
      res.json(thucthu);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
