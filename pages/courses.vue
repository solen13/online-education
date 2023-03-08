<template>
  <v-main class="mb-5">
    <v-row style="width: 77%" class="mt-5 mx-auto row-responsive">
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center">
        <sildebar />
      </v-col>
      <v-col cols="12" sm="8" md="8" class="mt-2 mb-4 pl-4">
        <nuxt-child />
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import sildebar from "../components/coursesA/coursesSlideBar.vue";
import coursesCard from "../components/coursesA/coursesCard.vue";
export default {
  components: { sildebar, coursesCard },
};
</script>
<style scoped>
* {
  padding: 0;
}
@media only screen and (max-width: 600px) {
  .row-responsive {
    width: 100% !important;
  }
}
</style>
