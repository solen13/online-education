<template>
  <div>
    <h1>English All Couses</h1>
    <h4>The basics are free</h4>
    <div
      class="mt-2"
      @click="routeCard(item)"
      v-for="(item, index) in 2"
      :key="index"
    >
      <courses-card />
    </div>
    <h4 class="mb-2 mt-2">From basics to profession</h4>
    <div class="mt-2" v-for="(item, index) in 3" :key="index">
      <courses-card />
    </div>
  </div>
</template>
<script>
import coursesCard from "../../components/coursesA/coursesCard.vue";
export default {
  components: { coursesCard },
  methods: {
    routeCard(item) {
      this.$router.push("/detail/courses/english" + item);
    },
  },
};
</script>
