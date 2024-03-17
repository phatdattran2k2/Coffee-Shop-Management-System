<template>
  <div class="updateForm">
    <form @submit.prevent="updateDrink">
      <label for="tenSP">Tên SP:</label>
      <input v-model="updatedDrink.TEN_SP" type="text" id="tenSP" required />

      <label for="giaBan">Giá Bán:</label>
      <input v-model="updatedDrink.GIA_BAN_HT" type="number" id="giaBan" required />

      <label for="donViTinh">Đơn Vị Tính:</label>
      <input v-model="updatedDrink.DON_VI_TINH" type="text" id="donViTinh" required />

      <button type="submit">Cập nhật</button>
    </form>
  </div>
</template>

<script>
import AutherDrink from '../services/Auther.drink.service';

export default {
  data() {
    return {
      updatedDrink: {
        MA_SP: this.drink_data.MA_SP, // Để MA_SP trống để cập nhật đúng sản phẩm
        TEN_SP: this.drink_data.TEN_SP,
        GIA_BAN_HT: this.drink_data.GIA_BAN_HT,
        DON_VI_TINH: this.drink_data.DON_VI_TINH
      },
      show: false
    };
  },
  props: {
    drink_data: Object
  },
  methods: {
    async updateDrink() {
      const id = this.updatedDrink.MA_SP;
      if (id) {
        const check = (await AutherDrink.updateDrinks(id, this.updatedDrink)).data;
        if (check.status) {
          this.$emit('update-success', this.updatedDrink); // Gửi sự kiện về component cha
          console.log('Thanh cong');
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
