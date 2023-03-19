<template>
  <div class="px-3">
    <v-card
      height="80"
      width="100%"
      color="#F5F5F5"
      class="d-flex align-center pa-3 rounded-xl mt-3"
      v-for="item in 3"
      :key="item"
    >
      <span class="ml-3">
        <h3>Test çözüm örnekeleri</h3>
        <div class="sub-title">matehematics-mixed number</div>
      </span>
    </v-card>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("lessonsName", "Notification");
  },
};
</script>
<style scoped>
h3 {
  color: #141414;
  font-size: 20px;
}
.sub-title {
  font-size: 16px;
  color: #141414;
  font-weight: 400;
}
</style>
