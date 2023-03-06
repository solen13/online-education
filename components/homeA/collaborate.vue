<template>
  <div>
    <div class="d-flex justify-center">
      <div style="position: relative">
        <h1 style="color: #050038" class="text-center">Collaborate without</h1>
        <h2 style="color: #050038" class="text-center mb-1">constraints</h2>
        <p class="note rounded-lg">YOUR IDEA STARTS HERE</p>
      </div>
    </div>

    <v-row class="mx-auto row-load" style="width: 90%">
      <v-col class="d-flex justify-center" v-for="item in 6" :key="item">
        <v-card width="336" flat class="pa-6">
          <div class="ic rounded-circle"></div>
          <h2 style="color: #050038" class="mt-4">Free forver</h2>
          <p style="font-size: 18px; color: #050038; opacity: 0.6" class="mt-4">
            Our free plan gives you unlimited team members, 3 boards, and 300+
            expert-made templates. Signing up with your work email lets you
            bring in your team faster. See our pricing plans for more features.
          </p>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="$vuetify.breakpoint.xs" class="d-flex justify-center">
      <v-btn v-if="isload" @click="loadBtn">load</v-btn>
      <v-btn v-else @click="loadBtn">kısalt</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isload: true,
    };
  },
  methods: {
    loadBtn() {
      this.isload = !this.isload;
      let load = document.querySelector(".row-load");
      if (this.isload) {
        load.style.height = "400px";
      } else {
        load.style.height = "100%";
      }
    },
  },
};
</script>

<style scoped>
.note {
  position: absolute;
  z-index: 99;
  right: 0;
  top: 0;
  font-size: 12px;
  padding: 5px 8px;
  background-color: #ffd02f;
  margin-top: -20px;
  transform: rotate(12deg);
  margin-right: -120px;
  font-weight: 700;
}
.ic {
  width: 75px;
  height: 75px;
  background: linear-gradient(89.84deg, #00ffa3 0.14%, #0085ff 145.77%);
}
@media only screen and (max-width: 600px) {
  .note {
    margin-right: 1px;
    margin-bottom: 5px !important;
  }
  .row-load {
    height: 400px;
    overflow: hidden;
  }
}
@media only screen and (min-width: 600px) {
  .row-load {
    height: 100% !important;
  }
}
</style>
