<template>
  <div class="main">
    <Header_Dinos_component></Header_Dinos_component>
    <router-view></router-view>
    <Footer_component />
  </div>
</template>

<script>
import Footer_component from '@/components/Footer.vue';
import Header_Dinos_component from '@/components/Header_Dinos.vue';
export default {
  components: { Footer_component, Header_Dinos_component }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');

html {
  font-size: 62.5%;
}

:root {
  --white-color: #fafafa;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  text-rendering: optimizeSpeed;
}
</style>
