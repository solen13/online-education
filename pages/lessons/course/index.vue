<template>
  <v-row style="width: 100%" class="mx-auto">
    <v-col
      md="4"
      sm="4"
      xs="12"
      lg="3"
      xl="2"
      class="d-flex justify-center"
      v-for="(item, index) in lessons"
      :key="index"
      @click="cardClick()"
    >
      <courseBox :btnShow="false" :getData="item" />
    </v-col>
  </v-row>
</template>
<script>
import courseBox from "@/components/educationCard/card.vue";
export default {
  components: { courseBox },
  data() {
    return {
      lessons: [
        {
          title: "Javascript",
          router: "/javascript/oneLessons",
        },

        {
          title: "HTML CSS",
          router: "/htmlCss/oneLessons",
        },
        {
          title: "Computer Enginer",
          router: "/comuterenginer/oneLessons",
        },
        {
          title: "Asp .Net",
          router: "/aspnet/oneLessons",
        },
        {
          title: "php",
          router: "/php/oneLessons",
        },
      ],
    };
  },
  methods: {
    cardClick(item, index) {
      this.$router.push(
        this.localePath({
          name: "lessons-course-course",
          params: { id: "46546" },
        })
      );
    },
  },

  created() {
    this.$store.dispatch("lessonsName", "Courses");
  },
};
</script>
