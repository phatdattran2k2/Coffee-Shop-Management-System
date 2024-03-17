<template>
  <div class="wrapper_regis-container--header">
    <div class="wrapper_logo" @click="gotoHome">
      <img
        class="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSd5AQRKadp409z5jf17vKHIoINVvErN8bpzm37RxkZ5bYv9HdUx-1plGUrfUyrQQbok&usqp=CAU"
        alt="dinosaur"
      />
    </div>
    <div class="wrapper_logo-infor">
      <div class="center" @click="gotoHome">
        <div class="wrapper_logo-infor--upper">
          <span class="text-1">DINO's</span>
          <span class="text-2">COFFEE SHOP</span>
        </div>
        <div class="wrapper_logo-infor--lower">
          <span class="text-3">Coffee Shop Management System</span>
        </div>
      </div>

      <div class="links" v-if="currentRoute !== '/'">
        <router-link class="link_to" to="/employee">Employees</router-link>
        <router-link class="link_to" to="/customer">Customers</router-link>
        <router-link class="link_to" to="/drink">Drinks</router-link>
        <router-link class="link_to" to="/statistics">Statistics</router-link>
        <button class="link_to btn-logout" @click="showLogoutModal">Log Out</button>
      </div>
      <confirm-logout-modal
        :showModal="logoutModalVisible"
        @confirmed="handleLogout"
        @canceled="cancelLogout"
      />
    </div>
  </div>
</template>

<script>
import ConfirmLogoutModal from './ConfirmLogoutModal.vue';

export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },

  components: {
    ConfirmLogoutModal
  },
  data() {
    return {
      logoutModalVisible: false
    };
  },
  methods: {
    gotoHome() {
      this.$router.push('/home');
    },
    showLogoutModal() {
      this.logoutModalVisible = true;
    },
    handleLogout() {
      this.$router.push({ path: '/' });

      this.logoutModalVisible = false;
    },
    cancelLogout() {
      this.logoutModalVisible = false;
    }
  }
};
</script>

<style scoped>
.btn-logout {
  background-color: #ffffff;
  border: none;
}
.container {
  display: flex;
  align-items: center;
}

.or {
  margin-top: 20px;
  font-size: 1.4rem;
}

.wrapper_regis-container {
  height: 100%;
  background-color: var(--white-color);
}

.wrapper_regis-container--header {
  height: 100px;
  display: flex;
  padding: 4px 0;
  border-bottom: 1px solid #1c57a5;
}

.wrapper_logo {
  width: 114px;
  height: 100px;
  margin-left: 40px;
}

.logo {
  width: 100%;
  height: 90%;
  object-fit: cover;
  /* transform: rotate(180deg); */
}

.wrapper_logo-infor {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
}

.center {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.links {
  padding: 0 28px;
}

.link_to {
  padding: 0 18px;
  font-size: x-large;
  font-weight: 800;
  text-decoration: none;
  color: #1c57a5;
}

.link_to:hover {
  color: #8db9dd;
}

.wrapper_logo-infor--upper {
  height: 30px;
  display: flex;
}

.text-1,
.text-2 {
  display: block;
  font-size: 2rem;
  font-weight: 600;
}

.text-1 {
  color: #1c57a5;
}

.text-2 {
  padding-left: 6px;
  color: #00abeb;
}

.text-3 {
  font-size: 1.8rem;
  font-weight: 500;
}

.wrapper_regis-container--body {
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.wrapper_regis-container--body-header {
  color: #5a7085;
}

.wrapper_regis-container--body-form {
  width: 515px;
  height: 223px;
  padding: 25px 25px 45px 25px;
  background: #eee none repeat scroll 0 0;
  border-radius: 4px;
  overflow: hidden;
}

.wrapper_regis-container--body-form {
  width: 515px;
  height: 223px;
  padding: 25px 25px 45px 25px;
  background: #eee none repeat scroll 0 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.input {
  width: 505px;
  height: 40px;
  margin-bottom: 10px;
  padding-top: 0;
  padding-left: 10px;
  padding-right: 0;
  border-radius: 4px;
  border: none;
  outline: none;
}

.checkbox-wrapper {
  margin: 10px 0 20px 0;
  display: flex;
  justify-content: flex-start;
}

.remember_input {
  font-size: 1.4rem;
  line-height: 1.9rem;
}

.login_button,
.submit_button {
  width: 100%;
  height: 30px;
  border: none;
  background-color: #00abeb;
  color: var(--white-color);
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;
}

.login_button:hover {
  opacity: 0.8;
  background-color: #032541;
}

.reset_button {
  width: 100%;
  margin-top: 20px;
  outline: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.2s;
}

.reset_button:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>
