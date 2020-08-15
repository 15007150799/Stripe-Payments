<template>
  <div class="checkout">
    <div class="container">
      <h1>Payment Failed !</h1>
      <div @click="route" class="btn">Go Home</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    route() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/style";
</style>

