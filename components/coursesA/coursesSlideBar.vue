<template>
  <div>
    <v-card
      class="rounded-xl px-6 py-3"
      color="#267dff48 "
      width="271"
      height="293"
    >
      <template>
        <v-btn to="/courses" color="#61a0ff">all</v-btn>
        <v-btn active-class="active" to="/courses/english" color="#61a0ff"
          >english</v-btn
        >
        <v-btn active-class="active" to="/courses/mathematics" color="#61a0ff"
          >mathematics</v-btn
        >
        <v-btn active-class="active" to="/courses/frontend" color="#61a0ff"
          >Front-end</v-btn
        >
        <v-btn active-class="active" to="/courses/uxui" color="#61a0ff"
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
