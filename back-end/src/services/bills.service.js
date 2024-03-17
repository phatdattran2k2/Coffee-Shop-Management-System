const knex = require("../database/knex");

module.exports = {
  getAllHoaDon: async () => {
    return await knex("HOA_DON").select("*");
  },
  getAll_cthd: async () => {
    return await knex("CHI_TIET_HD").select("*");
  },
  getAll_thucthu: async () => {
    return await knex("THUC_THU").select("*");
  },
  get_doanhthu: async () => {
    return await knex("HOA_DON").sum("GIA_TRI_HD as TOTAL_REVENUE");
  },
  get_bestseller: async () => {
    return await knex("CHI_TIET_HD")
      .select("QL_DMSP.MA_SP", "TEN_SP", "GIA_BAN_HT", "DON_VI_TINH")
      .sum({ TOTAL_QUANTITY_SOLD: "CHI_TIET_HD.CTHD_SO_LUONG" })
      .sum({
        TOTAL_REVENUE: knex.raw(
          "CHI_TIET_HD.CTHD_SO_LUONG * CHI_TIET_HD.CTHD_DON_GIA_BAN"
        ),
      })
      .join("QL_DMSP", "CHI_TIET_HD.MA_SP", "=", "QL_DMSP.MA_SP")
      .groupBy("CHI_TIET_HD.MA_SP")
      .orderBy("TOTAL_REVENUE", "desc")
      .first();
  },
};
