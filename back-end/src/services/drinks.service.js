/* eslint-disable require-jsdoc */
const knex = require("../database/knex");
const Paginator = require("./paginator");

function makeDrinkService() {
  //define functions for accessing the database
  function readDrink(payload) {
    const drink = {
      TEN_SP: payload.TEN_SP,
      GIA_BAN_HT: payload.GIA_BAN_HT,
      DON_VI_TINH: payload.DON_VI_TINH,
    };
    //remove undefined fields
    Object.keys(drink).forEach(
      (key) => drink[key] === undefined && delete drink[key]
    );
    return drink;
  }

  async function getManyDrinks(query) {
    const { TEN_SP, page = 1, limit = 100 } = query;
    const paginator = new Paginator(page, limit);

    let results = await knex("QL_DMSP")
      .where((builder) => {
        if (TEN_SP) {
          builder.where("TEN_SP", "like", `%${TEN_SP}%`);
        }
      })
      .select(
        knex.raw("count(MA_SP) OVER() AS recordsCount"),
        "MA_SP",
        "TEN_SP",
        "GIA_BAN_HT",
        "DON_VI_TINH"
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
      drinks: results,
    };
  }

  async function getDrinkById(id) {
    return knex("QL_DMSP").where("MA_SP", id).select("*").first();
  }

  //   async function logIn(email) {
  //     return knex("ADMIN").where("EMAIL_ADMIN", email).select("*").first();
  //   }

  async function updateDrink(id, payload) {
    const update = readDrink(payload);
    return knex("QL_DMSP").where("MA_SP", id).update(update);
  }

  async function createDrink(payload) {
    const drink = readDrink(payload);
    const [id] = await knex("QL_DMSP").insert(drink);
    return { id, ...drink };
  }

  async function deleteDrink(id) {
    return knex("QL_DMSP").where("MA_SP", id).del();
  }

  async function deleteAllAdmins() {
    return knex("QL_DMSP").del();
  }

  async function get_quantity() {
    return await knex("QL_DMSP").countDistinct("MA_SP as TOTAL_DRINKS").first();
  }

  return {
    get_quantity,
    getDrinkById,
    updateDrink,
    createDrink,
    deleteDrink,
    deleteAllAdmins,
    getManyDrinks,
  };
}

module.exports = makeDrinkService;
