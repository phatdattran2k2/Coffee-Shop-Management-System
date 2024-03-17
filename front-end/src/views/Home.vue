<template>
  <div class="home">
    <div class="tilte">
      <h6 class="tilte-description">Best Seller</h6>
      <h3 class="tilte-name">{{ best_seller.TEN_SP }}</h3>
    </div>

    <router-link class="link_to" to="/Statistics">Show more</router-link>

    <div class="frame_explore">
      <div class="explore">
        <i class="fa-solid fa-arrow-up-9-1"></i>
        <div class="infor">
          <p class="name">Quantity</p>
          <h3 class="number">{{ best_seller.TOTAL_QUANTITY_SOLD }}</h3>
        </div>
      </div>

      <div class="explore">
        <i class="fa-solid fa-money-bill"></i>
        <div class="infor">
          <p class="name">Price</p>
          <h3 class="number">{{ best_seller.GIA_BAN_HT + ' ' + best_seller.DON_VI_TINH }}</h3>
        </div>
      </div>

      <div class="explore">
        <i class="fa-solid fa-landmark"></i>
        <div class="infor">
          <p class="name">Revenue</p>
          <h3 class="number">{{ best_seller.TOTAL_REVENUE + ' ' + best_seller.DON_VI_TINH }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutherBillService from '@/services/Auther.bill.service';
export default {
  data() {
    return {
      best_seller: []
    };
  },
  name: 'home_view',
  async mounted() {
    this.best_seller = (await AutherBillService.getBestSeller()).data;
    console.log(this.best_seller);
  }
};
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
}

.link_to {
  color: black;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 40px;
  border: 1px solid silver;
  background-color: rgb(199, 193, 191);
  padding: 6px;
  border-radius: 9px;
}

.link_to:hover {
  background-color: black;
  color: aliceblue;
  text-decoration: none;
}
.home .tilte {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
}

.home .tilte .tilte-description {
  font-size: 20px;
  padding-bottom: 20px;
}

.home .tilte .tilte-name {
  font-size: 50px;
  font-weight: 700;
}

.home .frame_explore {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: aqua;
  width: 60%;
  padding: 40px;
  height: 80px;
  border-radius: 40px;
}

.home .frame_explore .explore {
  display: flex;
  width: 33%;
  justify-content: center;
}

.home .frame_explore .explore i {
  display: flex;
  padding: 18px;
  font-size: 24px;
  align-items: center;
}

.home .frame_explore .explore .infor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}

.infor .name {
  margin: 0;
  color: black;
  font-weight: 600;
}
</style>
