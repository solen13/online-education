<template>
  <div>
    <h1>All Couses</h1>
    <h4>The basics are free</h4>
    <div
      class="mt-2"
      v-for="(item, index) in 5"
      :key="index + 1"
      @click="routeCard(item)"
    >
      <courses-card />
    </div>
    <!-- <h4 class="mb-2 mt-2">From basics to profession</h4>
    <div
      class="mt-2"
      @click="routeCard(i)"
      v-for="(i, ind) in 3"
      :key="ind + 1"
    >
      {{ i }}
      <courses-card />
    </div> -->
  </div>
</template>
<script>
import coursesCard from "../../components/coursesA/coursesCard.vue";
export default {
  components: { coursesCard },
  methods: {
    routeCard(item) {
      this.$router.push(
        this.localePath({
          name: "detail-courses",
          params: { id: "1234" },
        })
      );
    },
  },
};
</script>
