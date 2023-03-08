<template>
  <div>
    <v-card class="rounded-xl px-6 py-3 bar" color="#267dff48 " width="271" height="293">
      <template>
        <v-btn :to="localePath({ name: 'courses' })" color="#61a0ff">all</v-btn>
        <v-btn active-class="active" :to="localePath('courses-english')" color="#61a0ff"
          >english</v-btn
        >
        <v-btn
          active-class="active"
          :to="localePath({ name: 'courses-mathematics' })"
          color="#61a0ff"
          >mathematics</v-btn
        >
        <v-btn
          active-class="active"
          :to="localePath({ name: 'courses-frontend' })"
          color="#61a0ff"
          >Front-end</v-btn
        >
        <v-btn
          active-class="active"
          :to="localePath({ name: 'courses-uxui' })"
          color="#61a0ff"
          >UX/UI</v-btn
        >
      </template>
    </v-card>
  </div>
</template>
<style scoped>
.v-btn {
  width: 100%;
  border-radius: 20px;
  margin-top: 16px;
  color: white;
}
.active {
  background-color: #053e94 !important;
}
@media only screen and (max-width: 600px) {
  .bar {
    width: 100% !important;
  }
}
</style>

<script>
import api from "../../constant/coursesList";
export default {
  computed: {
    getData() {
      return api;
    },
  },
};
</script>
