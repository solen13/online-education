<template>
  <div>
    <coursesVideo />
    <detailJobs />
    <courseslessonDetail />
    <questions class="mt-16" />
  </div>
</template>
<script>
import coursesVideo from "@/components/coursesA/coursesDetailVideo.vue";
import detailJobs from "@/components/coursesA/coursesDetailJobsCard.vue";
import courseslessonDetail from "@/components/coursesA/coursesLessonDetail.vue";
import questions from "@/components/homeA/questions.vue";
export default {
  components: { coursesVideo, questions, detailJobs, courseslessonDetail },
};
</script>
<style scoped></style>
