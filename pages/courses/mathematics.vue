<template>
  <div>
    <h1>Mathematics Couses</h1>
    <h4>The basics are free</h4>
    <div class="mt-2" v-for="(item, index) in 2" :key="index" @click="routeCard(item)">
      <courses-card />
    </div>
    <!-- <h4 class="mb-2 mt-2">From basics to profession</h4>
    <div class="mt-2" v-for="(item, index) in 3" :key="index" @click="routeCard(item)">
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
