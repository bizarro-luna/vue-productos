<template>
  <div id="app">
    <HeaderComponent />
      <!--<UltimosArticulos />-->
    <router-view></router-view>
    <FooterComponent />
  <!--<img alt="Vue logo" src="./assets/logo.png">
  
    <HelloWorld msg="Bienvenido a tu  Vue.js App"/>-->
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    
    HeaderComponent,
    
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/css/styles.css';

</style>
