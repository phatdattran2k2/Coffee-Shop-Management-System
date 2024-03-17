<template>
  <div class="updateForm">
    <form @submit.prevent="updateEmployee">
      <label for="tenNV">Tên NV:</label>
      <input v-model="updatedEmployee.TEN_NV" type="text" id="tenNV" required />

      <label for="matKhau">Mật Khẩu:</label>
      <input v-model="updatedEmployee.MAT_KHAU_NV" type="text" id="matKhau" required />

      <label for="email">Email:</label>
      <input v-model="updatedEmployee.EMAIL_NV" type="text" id="email" required />

      <label for="gioiTinh">Giới Tính:</label>
      <input v-model="updatedEmployee.GIOI_TINH_NV" type="text" id="gioiTinh" required />

      <label for="ngaySinh">Ngày Sinh:</label>
      <input v-model="formattedNgaySinh" type="date" id="ngaySinh" required />

      <label for="sdt">SDT:</label>
      <input v-model="updatedEmployee.SDT_NV" type="text" id="sdt" required />

      <button type="submit">Cập Nhật</button>
    </form>
  </div>
</template>

<script>
import AutherEmployee from '../services/Auther.employee.service';

export default {
  data() {
    return {
      updatedEmployee: {
        MA_NV: this.employee_data.MA_NV,
        TEN_NV: this.employee_data.TEN_NV,
        MAT_KHAU_NV: this.employee_data.MAT_KHAU_NV,
        EMAIL_NV: this.employee_data.EMAIL_NV,
        GIOI_TINH_NV: this.employee_data.GIOI_TINH_NV,
        NGAY_SINH_NV: this.employee_data.NGAY_SINH_NV,
        SDT_NV: this.employee_data.SDT_NV
      }
    };
  },
  props: {
    employee_data: Object
  },
  computed: {
    formattedNgaySinh() {
      // Chuyển đổi định dạng của NGAY_SINH_NV
      const ngaySinh = new Date(this.updatedEmployee.NGAY_SINH_NV);
      const formattedDate = ngaySinh.toISOString().split('T')[0];
      return formattedDate;
    }
  },
  methods: {
    async updateEmployee() {
      const id = this.employee_data.MA_NV;
      if (id) {
        try {
          const response = await AutherEmployee.updateEmployees(id, this.updatedEmployee);
          if (response.status) {
            this.$emit('update-success', this.updatedEmployee);
          }
        } catch (error) {
          console.error('Lỗi khi cập nhật nhân viên:', error);
        }
      }
    }
  }
};
</script>

<style scoped>
.updateForm {
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
