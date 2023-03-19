<template>
  <v-card flat class="mx-auto mt-10 card-responsive" width="90%">
    <h2 class="texts text-h3 font-weight-bold">Our Courses</h2>
    <v-sheet class="mx-auto" elevation="0" width="%100">
      <v-slide-group v-model="model" class="pa-4" active-class="success">
        <v-slide-item
          v-for="(item, n) in lessons"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card class="ma-4" height="400" width="290" @click="toggle" flat>
            <v-row class="fill-height align-center justify-center">
              <contentCard :btnShow="true" :getData="item" />
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-card>
</template>

<script>
import contentCard from "@/components/educationCard/card.vue";
export default {
  data: () => ({
    model: null,
    rating: 2.5,
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
  }),
  components: { contentCard },
};
</script>

<style>
.texts {
  margin-left: 70px;
  color: #01fea5;
}

@media only screen and (max-width: 600px) {
  .card-responsive {
    width: 100% !important;
  }
  .texts {
    padding: 0px !important;
    margin: 0px !important;
  }
}
</style>
