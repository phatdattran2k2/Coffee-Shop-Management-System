<template>
  <div class="table">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Accumulated Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in customers" :key="index">
            <td>{{ customer.MA_KH }}</td>
            <td>{{ customer.TEN_KH }}</td>
            <td>{{ customer.SDT_KH }}</td>
            <td>{{ customer.DIEM_TL }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/Auther.customer.service';

export default {
  data() {
    return {
      customers: []
    };
  },
  name: 'customer_view',
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await AuthService.getCustomers();
        this.customers = response.data.contacts; // Giả sử dữ liệu trả về có thuộc tính contacts chứa danh sách khách hàng
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu khách hàng:', error);
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
