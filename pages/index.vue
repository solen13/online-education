<template>
  <v-main>
    <banner />
    <collaborate class="mt-10" />
    <ourCouse />
    <teach class="mb-3" />
    <pricing />

    <reviews />

    <questions />
    <people class="hidden-sm-and-down" />
    <contack class="hidden-sm-and-down" />
  </v-main>
</template>

<script>
import banner from "../components/homeA/bannerContent.vue";
import ourCouse from "../components/homeA/couresContent.vue";
import collaborate from "../components/homeA/collaborate.vue";
import teach from "../components/homeA/teachIntroduction.vue";
import pricing from "../components/homeA/pricingA.vue";
import reviews from "../components/homeA/reviewsA.vue";
import questions from "../components/homeA/questions.vue";
import people from "../components/homeA/people.vue";
import contack from "../components/homeA/contactA.vue";
export default {
  name: "IndexPage",
  components: {
    banner,
    collaborate,
    ourCouse,
    teach,
    pricing,
    reviews,
    questions,
    people,
    contack,
  },
};
</script>
<style scoped>
.top-margin {
  margin-top: 100px !important;
}
</style>
