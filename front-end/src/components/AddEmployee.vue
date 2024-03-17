<template>
  <div class="add-form">
    <form @submit.prevent="addNewEmployee">
      <label for="tenNV">Tên NV:</label>
      <input v-model="newEmployee.TEN_NV" type="text" id="tenNV" required />

      <label for="matKhau">Mật Khẩu:</label>
      <input v-model="newEmployee.MAT_KHAU_NV" type="text" id="matKhau" required />

      <label for="email">Email:</label>
      <input v-model="newEmployee.EMAIL_NV" type="text" id="email" required />

      <label for="gioiTinh">Giới Tính:</label>
      <input v-model="newEmployee.GIOI_TINH_NV" type="text" id="gioiTinh" required />

      <label for="ngaySinh">Ngày Sinh:</label>
      <input v-model="newEmployee.NGAY_SINH_NV" type="date" id="ngaySinh" required />

      <label for="sdt">SDT:</label>
      <input v-model="newEmployee.SDT_NV" type="text" id="sdt" required />

      <button type="submit">Thêm Nhân viên</button>
    </form>
  </div>
</template>

<script>
import AutherEmployee from '../services/Auther.employee.service';

export default {
  data() {
    return {
      newEmployee: {
        TEN_NV: '',
        MAT_KHAU_NV: '',
        EMAIL_NV: '',
        GIOI_TINH_NV: '',
        NGAY_SINH_NV: '',
        SDT_NV: ''
      }
    };
  },
  methods: {
    async addNewEmployee() {
      try {
        const response = await AutherEmployee.addEmployees(this.newEmployee);
        this.$emit('add-success', { status: true, message: 'Thêm khách hàng thành công' });
        console.log('Thêm khách hàng thành công');
      } catch (error) {
        console.error('Lỗi khi thêm khách hàng:', error);
        this.$emit('add-success', { status: false, message: 'Thêm khách hàng thất bại' });
      }
    }
  }
};
</script>

<style scoped>
.add-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}

label {
  margin-top: 10px;
}

input {
  margin-bottom: 10px;
}

button {
  cursor: pointer;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
}
</style>
