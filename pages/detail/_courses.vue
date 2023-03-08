<template>
  <div>
    <coursesVideo />
    <detailJobs />
    <questions />
  </div>
</template>
<script>
import coursesVideo from "@/components/coursesA/coursesDetailVideo.vue";
import detailJobs from "@/components/coursesA/coursesDetailJobsCard.vue";
import questions from "@/components/homeA/questions.vue";
export default {
  components: { coursesVideo, questions, detailJobs },
};
</script>
<style scoped></style>
