<template>
  <div class="table">
    <div class="table-container">
      <p v-if="showMessage">{{ message }}</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Password</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Phone Number</th>
            <th>Options<button @click="show_AddForm()" class="add-button">Add</button></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees.employees" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ employee.TEN_NV }}</td>
            <td>{{ employee.MAT_KHAU_NV }}</td>
            <td>{{ employee.EMAIL_NV }}</td>
            <td>{{ employee.GIOI_TINH_NV }}</td>
            <td>{{ formatDate(employee.NGAY_SINH_NV) }}</td>
            <td>{{ formatPhoneNumber(employee.SDT_NV) }}</td>
            <td>
              <button @click="editEmployee(index)" class="edit-button">Edit</button>
              <button @click="deleteEmployee(employee.MA_NV)" class="delete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <updateEmployees
      v-if="showUpdate && employee_data"
      :employee_data="employee_data"
      @update-success="handleUpdateSuccess"
    ></updateEmployees>
    <AddEmployee v-if="showAddForm" @add-success="handleAddSuccess"></AddEmployee>
    <ConfirmLogoutModal
      :showModal="showDel"
      @confirmed="handleDel"
      @canceled="cancelDel"
    ></ConfirmLogoutModal>
  </div>
</template>

<script>
import AutherEmployee from '../services/Auther.employee.service';
import updateEmployees from '../components/UpdateEmployee.vue';
import AddEmployee from '../components/AddEmployee.vue';
import ConfirmLogoutModal from '@/components/ConfirmLogoutModal.vue';
// import { date } from 'yup';
import { format } from 'date-fns';

export default {
  data() {
    return {
      employees: [],
      showUpdate: false,
      employee_data: [],
      dataChanged: false,
      showAddForm: false,
      addSuccess: null,
      showMessage: false,
      message: '',
      showDel: false,
      id_delete: ''
    };
  },
  name: 'employee_view',

  components: { AddEmployee, updateEmployees, ConfirmLogoutModal },
  async mounted() {
    this.employees = (await AutherEmployee.getEmployees()).data;
    await this.loadData();
  },

  methods: {
    cancelDel() {
      this.showDel = false;
    },
    async handleDel() {
      try {
        await AutherEmployee.deleteEmployees(this.id_delete);
        this.showMessage = true;
        this.message = 'Đã xóa thành công';
        this.showDel = false;
        setTimeout(() => {
          this.showMessage = false;
          this.message = '';
        }, 2000);
        await this.loadData();
      } catch (error) {
        console.error('Lỗi khi xóa nhân viên:', error);
      }
    },
    formatPhoneNumber(phoneNumber) {
      // Format số điện thoại theo định dạng mong muốn
      const cleaned = ('' + phoneNumber).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
      return phoneNumber;
    },
    formatDate(dateString) {
      const ngaySinh = new Date(dateString);
      return format(ngaySinh, 'dd/MM/yyyy'); // Định dạng ngày tháng năm
    },
    async loadData() {
      this.employees = (await AutherEmployee.getEmployees()).data;
      this.dataChanged = false;
    },

    show_AddForm() {
      this.showAddForm = true;
      this.addSuccess = null; // Reset giá trị addSuccess khi hiển thị form thêm sản phẩm
    },

    async handleAddSuccess({ status, message }) {
      this.addSuccess = { status, message };
      if (status) {
        await this.loadData();
        this.showAddForm = false;
      }
    },

    async handleUpdateSuccess(updatedData) {
      // console.log('Updated data:', updatedData);
      const index = this.employees.employees.findIndex((d) => d.MA_NV === updatedData.MA_NV);
      if (index >= 0) {
        this.employees.employees[index] = updatedData;
        this.showUpdate = false;
        this.showMessage = true;
        this.message = 'Đã cập nhật thành công';
        setTimeout(() => {
          this.showMessage = false;
          this.message = '';
        }, 2000);
      }
    },
    async editEmployee(index) {
      this.showUpdate = true;
      this.employee_data = this.employees.employees[index];
      console.log(this.employee_data);
    },
    async deleteEmployee(id) {
      this.showDel = !this.showDel;
      this.id_delete = id;
    }
  },
  watch: {
    dataChanged: function (newVal) {
      if (newVal) {
        this.loadData();
      }
    }
  }
};
</script>

<style scoped>
th {
  position: relative;
}

th button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.table {
  position: relative;
}
.table-container {
  width: 1360px;
  max-height: 450px;
  overflow-y: auto;
  position: absolute;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  cursor: pointer;
  margin-right: 5px;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
}

.edit-button {
  background-color: rgb(145, 175, 76);
  color: white;
}

.delete-button {
  background-color: #ff0000;
  color: white;
}
</style>
