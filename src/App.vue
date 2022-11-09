<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>

import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar }
}

</script>

<style>
.displayNone {
  display: none;
}
</style>