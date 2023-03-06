<template>
  <v-row style="width: 90%" class="mx-auto">
    <v-col
      md="4"
      class="d-flex justify-center"
      @click="cardClick(item)"
      v-for="item in 6"
      :key="item"
    >
      <courseBox :btnShow="false" />
    </v-col>
  </v-row>
</template>
<script>
import courseBox from "@/components/educationCard/card.vue";
export default {
  components: { courseBox },
  methods: {
    cardClick(item) {
      this.$router.push("/lessons/course/" + item);
    },
  },

  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
};
</script>
