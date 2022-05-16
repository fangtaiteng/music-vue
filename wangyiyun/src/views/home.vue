<template>
  <div>
    <topNav />
    <topSwiper />
  </div>
</template>

<script>
import topNav from "../components/home/topNav.vue";
import topSwiper from "../components/home/topSwiper.vue";
export default {
  name: "home",
  components: {
    topNav,
    topSwiper,
  },
};
</script>

<style>
</style>