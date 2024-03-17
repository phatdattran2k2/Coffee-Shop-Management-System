<template>
  <div class="add-form">
    <form @submit.prevent="addNewDrink">
      <label for="tenSP">Tên SP:</label>
      <input v-model="newDrink.TEN_SP" type="text" id="tenSP" required />

      <label for="giaBan">Giá Bán:</label>
      <input v-model="newDrink.GIA_BAN_HT" type="number" id="giaBan" required />

      <label for="donViTinh">Đơn Vị Tính:</label>
      <input v-model="newDrink.DON_VI_TINH" type="text" id="donViTinh" required />

      <button type="submit">Thêm Sản Phẩm</button>
    </form>
  </div>
</template>

<script>
import AutherDrink from '../services/Auther.drink.service';

export default {
  data() {
    return {
      newDrink: {
        TEN_SP: '',
        GIA_BAN_HT: 0,
        DON_VI_TINH: ''
      }
    };
  },
  props: {
    drink_data: Object
  },
  methods: {
    async addNewDrink() {
      try {
        const response = await AutherDrink.addDrinks(this.newDrink);
        this.$emit('add-success', { status: true, message: 'Thêm sản phẩm thành công' });
        console.log('Thêm thành công');
      } catch (error) {
        console.error('Lỗi khi thêm sản phẩm:', error);
        this.error = error.response ? error.response.data : 'Có lỗi xảy ra';
        this.$emit('add-success', { status: false, message: 'Thêm sản phẩm thất bại' });
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
