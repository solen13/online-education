<template>
  <div class="">
    <h1>All Feedback</h1>
    <div v-for="item in loadLength" class="mt-2" @click="cardClicked()">
      <reviewsCard />
    </div>
    <div class="d-flex justify-center mt-2">
      <v-btn @click="load" class="rounded-pill black white--text">load</v-btn>
    </div>
  </div>
</template>
<script>
import reviewsCard from "../../components/reviewsFolder/reviewsCard.vue";
export default {
  components: { reviewsCard },
  data() {
    return {
      loadLength: 5,
    };
  },
  methods: {
    load() {
      this.loadLength += 3;
    },

    cardClicked() {
      this.$store.dispatch("reviewsDetail", this.fakeData);
    },
  },
};
</script>
