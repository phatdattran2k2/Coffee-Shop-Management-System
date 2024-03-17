/* eslint-disable require-jsdoc */
const knex = require("../database/knex");
const Paginator = require("./paginator");

function makeEmployeeService() {
  //define functions for accessing the database
  function readEmployee(payload) {
    const employee = {
      TEN_NV: payload.TEN_NV,
      MAT_KHAU_NV: payload.MAT_KHAU_NV,
      EMAIL_NV: payload.EMAIL_NV,
      GIOI_TINH_NV: payload.GIOI_TINH_NV,
      NGAY_SINH_NV: payload.NGAY_SINH_NV,
      SDT_NV: payload.SDT_NV,
    };
    //remove undefined fields
    Object.keys(employee).forEach(
      (key) => employee[key] === undefined && delete employee[key]
    );
    return employee;
  }

  async function getManyEmployees(query) {
    const { TEN_NV, page = 1, limit = 100 } = query;
    const paginator = new Paginator(page, limit);

    let results = await knex("NHAN_VIEN")
      .where((builder) => {
        if (TEN_NV) {
          builder.where("TEN_NV", "like", `%${TEN_NV}%`);
        }
      })
      .select(
        knex.raw("count(MA_NV) OVER() AS recordsCount"),
        "MA_NV",
        "TEN_NV",
        "MAT_KHAU_NV",
        "EMAIL_NV",
        "GIOI_TINH_NV",
        "NGAY_SINH_NV",
        "SDT_NV"
      )
      .limit(paginator.limit)
      .offset(paginator.offset);

    let totalRecords = 0;
    results = results.map((result) => {
      totalRecords = result.recordsCount;
      delete result.recordsCount;
      return result;
    });
    return {
      metadata: paginator.getMetadata(totalRecords),
      employees: results,
    };
  }

  async function getEmployeeById(id) {
    return knex("NHAN_VIEN").where("MA_NV", id).select("*").first();
  }

  async function updateEmployee(id, payload) {
    const update = readEmployee(payload);
    return knex("NHAN_VIEN").where("MA_NV", id).update(update);
  }

  async function createEmployee(payload) {
    const employee = readEmployee(payload);
    const [id] = await knex("NHAN_VIEN").insert(employee);
    return { id, ...employee };
  }

  async function deleteEmployee(id) {
    return knex("NHAN_VIEN").where("MA_NV", id).del();
  }

  async function get_quantity() {
    return await knex("NHAN_VIEN")
      .countDistinct("MA_NV as TOTAL_EMPLOYEES")
      .first();
  }

  return {
    get_quantity,
    getEmployeeById,
    updateEmployee,
    createEmployee,
    deleteEmployee,
    getManyEmployees,
  };
}

module.exports = makeEmployeeService;
