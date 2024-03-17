/* eslint-disable require-jsdoc */
const knex = require("../database/knex");
const Paginator = require("../services/paginator");

function makeAdminService() {
  //define functions for accessing the database
  function readAdmin(payload) {
    const admin = {
      TEN_Admin: payload.TEN_Admin,
      MAT_KHAU_ADMIN: payload.MAT_KHAU_ADMIN,
      EMAIL_ADMIN: payload.EMAIL_ADMIN,
      SDT_ADMIN: payload.SDT_ADMIN,
    };
    //remove undefined fields
    Object.keys(admin).forEach(
      (key) => admin[key] === undefined && delete admin[key]
    );
    return admin;
  }

  async function getManyAdmins(query) {
    const { TEN_ADMIN, page = 1, limit = 5 } = query;
    const paginator = new Paginator(page, limit);

    let results = await knex("ADMIN")
      .where((builder) => {
        if (TEN_ADMIN) {
          builder.where("TEN_ADMIN", "like", `%${TEN_ADMIN}%`);
        }
      })
      .select(
        knex.raw("count(MA_ADMIN) OVER() AS recordsCount"),
        "MA_ADMIN",
        "TEN_ADMIN",
        "MAT_KHAU_ADMIN",
        "EMAIL_ADMIN",
        "SDT_ADMIN"
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
      contacts: results,
    };
  }

  async function getAdminById(id) {
    return knex("ADMIN").where("MA_ADMIN", id).select("*").first();
  }

  async function logIn(email) {
    return knex("ADMIN").where("EMAIL_ADMIN", email).select("*").first();
  }

  async function updateAdmin(id, payload) {
    const update = readAdmin(payload);
    return knex("ADMIN").where("MA_ADMIN", id).update(update);
  }

  async function createAdmin(payload) {
    const contact = readAdmin(payload);
    const [id] = await knex("ADMIN").insert(contact);
    return { id, ...contact };
  }

  async function deleteAdmin(id) {
    return knex("ADMIN").where("MA_ADMIN", id).del();
  }

  async function deleteAllAdmins() {
    return knex("ADMIN").del();
  }

  return {
    getAdminById,
    updateAdmin,
    createAdmin,
    deleteAdmin,
    deleteAllAdmins,
    getManyAdmins,
    logIn,
  };
}

module.exports = makeAdminService;
