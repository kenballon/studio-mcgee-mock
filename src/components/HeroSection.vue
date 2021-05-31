<template lang="">
    <div class="container xl mx-auto mt-4" >
        <div class="demo">
            <button @click="testShow = !testShow">Show Hero Text</button>
        </div>
       <transition name="show-hero">
            <div v-show="testShow">
                <h1>Hero Section</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorem sint sit veritatis placeat ad blanditiis et, explicabo aut sed? A, ipsam quis.</p>
            </div>
       </transition>
    </div>
</template>
<script>
export default {
  name: "Hero",
  data() {
    return {
      testShow: true
    };
  }
};
</script>
<style lang="scss" scoped>
button{
    background-color: beige;
    padding:15px;
}
.container {
  h1 {
    font-size: 72px;
    font-family: "DM Serif Display";
  }
}

.show-hero-enter-active{
    transition: all 0.3s ease-out;
}

.show-hero-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.show-hero-enter-from,.show-hero-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>