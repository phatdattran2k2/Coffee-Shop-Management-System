<template>
  <div class="table">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Currency Unit</th>
            <th>Options<button @click="show_AddForm()" class="add-button">Add</button></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(drink, index) in drinks.drinks" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ drink.TEN_SP }}</td>
            <td>{{ drink.GIA_BAN_HT }}</td>
            <td>{{ drink.DON_VI_TINH }}</td>
            <td>
              <button @click="editDrink(index)" class="edit-button">Edit</button>
              <button @click="deleteDrink(drink.MA_SP)" class="delete-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <updateDrinks
      v-if="showUpdate && drink_data"
      :drink_data="drink_data"
      @update-success="handleUpdateSuccess"
    ></updateDrinks>
    <AddDrink v-if="showAddForm" @add-success="handleAddSuccess"></AddDrink>
  </div>
</template>

<script>
import AutherDrink from '../services/Auther.drink.service';
import updateDrinks from '../components/UpdateDrink.vue';
import AddDrink from '../components/AddDrink.vue';

export default {
  data() {
    return {
      drinks: [],
      showUpdate: false,
      drink_data: [],
      dataChanged: false,
      showAddForm: false,
      addSuccess: null
    };
  },
  name: 'drink_view',

  components: { AddDrink, updateDrinks },
  async mounted() {
    this.drinks = (await AutherDrink.getDrinks()).data;
    await this.loadData();
  },

  methods: {
    async loadData() {
      this.drinks = (await AutherDrink.getDrinks()).data;
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
      const index = this.drinks.drinks.findIndex((d) => d.MA_SP === updatedData.MA_SP);
      // console.log(index);
      if (index >= 0) {
        this.drinks.drinks[index] = updatedData;
        this.showUpdate = false;
      }
    },
    async editDrink(index) {
      this.showUpdate = true;
      this.drink_data = this.drinks.drinks[index];
      console.log(this.drink_data);
    },
    async deleteDrink(id) {
      try {
        await AutherDrink.deleteDrinks(id);
        console.log('Xóa đồ uống với id:', id);
        await this.loadData();
      } catch (error) {
        console.error('Lỗi khi xóa sản phẩm:', error);
      }
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
