<template>
  <div class="wrapper grid">
    <div class="wrapper_regis-container grid wide">
      <div class="wrapper_regis-container--body">
        <h3 class="wrapper_regis-container--body-header">Welcome to Coffee Shop Manager!</h3>
        <form method="post" class="wrapper_regis-container--body-form">
          <input
            v-model="email"
            class="input username_input"
            placeholder="Email"
            type="text"
            name="username"
          />
          <input
            v-model="pw"
            class="input password_input"
            placeholder="Password"
            type="password"
            name="password"
          />
          <div class="checkbox-wrapper">
            <input type="checkbox" name="remember" value="1" />
            <label class="remember_input">Remember password</label>
          </div>
          <button
            id="login_button"
            @click="login"
            type="button"
            name="login_button"
            class="login_button"
          >
            Log in
          </button>
          <div class="container">
            <button id="signup_button" name="signup_button" class="reset_button">
              Need an account?
            </button>
            <span class="or">Or</span>
            <button id="reset_button" name="reset_button" class="reset_button">
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Auther from '../services/Auther.admin.service';

export default {
  name: 'Login-view',
  data() {
    return { email: '', pw: '' };
  },
  methods: {
    async login() {
      const a = (
        await Auther.login({
          email: this.email,
          pw: this.pw
        })
      ).data;
      if (a.status === 'success') {
        this.$router.push('/home');
      } else {
        console.log('error');
      }
    }
  }
};
</script>

<style scoped>
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
  height: 100%;
  object-fit: cover;
  /* transform: rotate(180deg); */
}

.wrapper_logo-infor {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
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
