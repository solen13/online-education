<template>
  <v-row style="width: 95%" class="mt-2 mx-auto">
    <v-col
      md="4"
      sm="6"
      xs="12"
      v-for="item in 15"
      :key="item"
      class="d-flex justify-center"
    >
      <lessonsCard />
    </v-col>
  </v-row>
</template>
<script>
import lessonsCard from "@/components/lessons/lessonsCard.vue";
export default {
  components: { lessonsCard },
  methods: {},
  created() {
    this.$store.dispatch("lessonsName", "Lessons");
  },
};
</script>
