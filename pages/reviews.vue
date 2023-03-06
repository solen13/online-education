<template>
  <v-main>
    <v-row style="width: 77%" class="mt-5 mx-auto row-responsive">
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center">
        <v-card
          class="rounded-xl px-6 py-3"
          color="#267dff48 "
          width="271"
          height="293"
        >
          <v-btn to="/reviews" color="#61a0ff">all</v-btn>
          <v-btn active-class="active" to="/reviews/english" color="#61a0ff"
            >english</v-btn
          >
          <v-btn active-class="active" to="/reviews/mathematics" color="#61a0ff"
            >mathematics</v-btn
          >
          <v-btn active-class="active" to="/reviews/frontend" color="#61a0ff"
            >Front-end</v-btn
          >
          <v-btn active-class="active" to="/reviews/uxui" color="#61a0ff"
            >UX/UI</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8" class="mb-6">
        <nuxt-child />
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
export default {
  components: {},
  mounted() {},
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

.v-btn {
  width: 100%;
  border-radius: 20px;
  margin-top: 16px;
  color: white;
}
.active {
  background-color: #053e94 !important;
}
</style>
