<template>
  <div class="home">
    <div class="tilte">
      <h3 class="tilte-name">Store Statistics</h3>
    </div>
    <div class="frame_explore">
      <div class="explore">
        <i class="fa-solid fa-person"></i>
        <div class="infor">
          <p class="name">Customers</p>
          <h3 class="number">{{ quantity_cus.TOTAL_CUSTOMERS }}</h3>
        </div>
      </div>

      <div class="explore">
        <i class="fa-solid fa-arrow-up-9-1"></i>
        <div class="infor">
          <p class="name">Employees</p>
          <h3 class="number">{{ quantity_employees.TOTAL_EMPLOYEES }}</h3>
        </div>
      </div>

      <div class="explore">
        <i class="fa-solid fa-mug-hot"></i>
        <div class="infor">
          <p class="name">Drinks</p>
          <h3 class="number">{{ quantity_drinks.TOTAL_DRINKS }}</h3>
        </div>
      </div>

      <div class="explore">
        <i class="fa-solid fa-money-bill"></i>
        <div class="infor">
          <p class="name">Total</p>
          <h3 class="number">
            {{ doanhthu[0] ? doanhthu[0].TOTAL_REVENUE : `` }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutherEmployeeService from '@/services/Auther.employee.service';
import AutherDrinkService from '@/services/Auther.drink.service';
import AutherCustomerService from '@/services/Auther.customer.service';
import AutherBillService from '@/services/Auther.bill.service';

export default {
  name: 'home_view',
  data() {
    return {
      quantity_employees: [],
      quantity_drinks: [],
      quantity_cus: [],
      doanhthu: []
    };
  },

  async mounted() {
    this.quantity_cus = (await AutherCustomerService.getQuantity()).data;
    console.log(this.quantity_cus);
    this.quantity_drinks = (await AutherDrinkService.getQuantity()).data;
    console.log(this.quantity_drinks);
    this.quantity_employees = (await AutherEmployeeService.getQuantity()).data;
    console.log(this.quantity_employees);
    this.doanhthu = (await AutherBillService.getQuantity()).data;
    console.log(this.doanhthu);
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

.home .tilte {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
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
