<template>
  <div class="app-container">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  components: { Navigation, Footer }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  .app-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    footer{
      margin-top:auto;
    }
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
    }
    a.router-link-exact-active {
      color: red;
    }
  }
}
</style>
