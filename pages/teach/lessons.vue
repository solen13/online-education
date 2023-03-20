<template>
  <v-row style="width: 95%" class="mt-2 mx-auto">
    <v-col
      md="4"
      sm="4"
      xs="12"
      lg="3"
      xl="2"
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
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
};
</script>
