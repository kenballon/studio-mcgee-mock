<template>
  <div class="home">  
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'

export default {
  name: 'Home',
  components: {
    LandingPage
  }  
}
</script>

<style lang="scss" scoped>
// @media screen and(min-width: 300px) and (max-width: 750px){
//   .home{
//     padding:25px;
//   }
// }
</style>
