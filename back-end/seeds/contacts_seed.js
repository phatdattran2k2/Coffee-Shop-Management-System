const { faker } = require("@faker-js/faker");

// // Hàm kiểm tra độ tuổi
// function isOver18(birthdate) {
//   const today = new Date();
//   const age = today.getFullYear() - birthdate.getFullYear();
//   if (
//     today.getMonth() < birthdate.getMonth() ||
//     (today.getMonth() === birthdate.getMonth() &&
//       today.getDate() < birthdate.getDate())
//   ) {
//     return age >= 18;
//   }
//   return age >= 18;
// }

// // Hàm để tạo ngày sinh phù hợp với tuổi >= 18
// function generateBirthdate() {
//   let birthdate;
//   do {
//     birthdate = faker.date.past(50); // Chọn ngẫu nhiên ngày sinh trong vòng 50 năm trước
//   } while (!isOver18(birthdate));
//   return birthdate;
// }

// const birthdate = generateBirthdate();

// console.log(birthdate);

function createContact() {
  // const birthdate = faker.date.past(18); // Tạo ngày sinh, đảm bảo trên 18 tuổi
  // NGAY_SINH_KH: birthdate,
  const diemTichLuy = 0; // Tạo điểm tích lũy từ 0 đến 100
  const makhachhang = 9;
  return {
    MA_KH: makhachhang,
    TEN_KH: faker.person.fullName(),
    SDT_KH: faker.phone.number("09########"),
    DIEM_TL: diemTichLuy,
  };
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // await knex("NHAN_VIEN").del();
  // await knex("NHAN_VIEN").insert(Array(10).fill().map(createContact));
  // await knex("QL_DMKH").del();
  await knex("QL_DMKH").insert(Array(1).fill().map(createContact));
};
