<template>
  <div class="emityBox">
    <emtiyBox />
  </div>
</template>
<script>
import emtiyBox from "@/components/lessons/inboxA/entryBox.vue";
export default {
  components: { emtiyBox },
  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
};
</script>
<style scoped>
@media only screen and (max-width: 750px) {
  .emityBox {
    display: none;
  }
}
</style>
