/* eslint-disable require-jsdoc */
const knex = require("../database/knex");
const Paginator = require("../services/paginator");

function makeContactsService() {
  //define functions for accessing the database
  function readContact(payload) {
    const contact = {
      TEN_KH: payload.TEN_KH,
      SDT_KH: payload.SDT_KH,
      DIEM_TL: payload.DIEM_TL,
    };
    //remove undefined fields
    Object.keys(contact).forEach(
      (key) => contact[key] === undefined && delete contact[key]
    );
    return contact;
  }

  async function getManyContacts(query) {
    const { TEN_KH, DIEM_TL, page = 1, limit = 1000 } = query;
    const paginator = new Paginator(page, limit);

    let results = await knex("QL_DMKH")
      .where((builder) => {
        if (TEN_KH) {
          builder.where("TEN_KH", "like", `%${TEN_KH}%`);
        }
        if (DIEM_TL !== undefined) {
          builder.where("DIEM_TL", 0);
        }
      })
      .select(
        knex.raw("count(MA_KH) OVER() AS recordsCount"),
        "MA_KH",
        "TEN_KH ",
        "SDT_KH",
        "DIEM_TL"
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

  async function getContactById(id) {
    return knex("QL_DMKH").where("MA_KH", id).select("*").first();
  }

  async function updateContact(id, payload) {
    const update = readContact(payload);
    return knex("QL_DMKH").where("MA_KH", id).update(update);
  }

  async function createContact(payload) {
    const contact = readContact(payload);
    const [id] = await knex("QL_DMKH").insert(contact);
    return { id, ...contact };
  }

  async function deleteContact(id) {
    return knex("QL_DMKH").where("MA_KH", id).del();
  }

  async function deleteAllContacts() {
    return knex("QL_DMKH").del();
  }

  async function get_quantity() {
    return await knex("QL_DMKH")
      .countDistinct("MA_KH as TOTAL_CUSTOMERS")
      .first();
  }

  return {
    get_quantity,
    createContact,
    getManyContacts,
    updateContact,
    getContactById,
    deleteContact,
    deleteAllContacts,
  };
}

module.exports = makeContactsService;

// makeContactsService().loginService("@Dinos61");
