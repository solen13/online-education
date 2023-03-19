<template>
  <v-main style="position: relative">
    <v-row style="width: 77%" class="mt-5 mx-auto row-responsive">
      <v-col cols="12" sm="4" md="4" class="d-flex justify-center">
        <v-card
          class="rounded-xl px-6 py-3 card-responsive"
          color="#267dff48 "
          width="271"
          height="293"
        >
          <v-btn :to="localePath({ name: 'reviews' })" color="#61a0ff"
            >all</v-btn
          >
          <v-btn
            active-class="active"
            color="#61a0ff"
            :to="localePath(`reviews-english`)"
            >english</v-btn
          >
          <v-btn
            active-class="active"
            :to="localePath(`reviews-mathematics`)"
            color="#61a0ff"
            >mathematics</v-btn
          >
          <v-btn
            active-class="active"
            :to="localePath(`reviews-frontend`)"
            color="#61a0ff"
            >Front-end</v-btn
          >
          <v-btn
            active-class="active"
            color="#61a0ff"
            :to="localePath(`reviews-uxui`)"
            >UX/UI</v-btn
          >
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8" class="mb-6">
        <nuxt-child />
      </v-col>
    </v-row>
    <div
      v-if="$store.state.reviewsDetail != ''"
      class="card-detail d-flex justify-center align-center"
    >
      <card />
    </div>
  </v-main>
</template>
<script>
import card from "@/components/reviewsFolder/reviewsDetailCard.vue";
export default {
  components: { card },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    routerBtn(item) {
      this.$router.push(this.localePath(`reviews-${item}`));
    },
  },
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
  .card-responsive {
    width: 100% !important;
    margin-bottom: 15px;
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
.card-detail {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(148, 145, 145, 0.531);
}
</style>
