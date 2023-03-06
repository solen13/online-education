<template>
  <v-card
    v-if="getData"
    width="280"
    class="ml-4 d-flex flex-column justify-center"
    flat
    height="417"
  >
    <v-card flat class="rounded-xl" style="height: 160px; width: 100%">
      <v-img
        width="100%"
        height="100%"
        src="https://img-c.udemycdn.com/course/240x135/4993934_0107_4.jpg"
      ></v-img>
    </v-card>

    <span class="ml-3">
      <h2 class="mt-2">{{ getData.title }}</h2>
      <span class="d-flex mt-1 align-center">
        <v-rating
          v-model="rating"
          dense
          readonly
          size="14"
          color="yellow"
          background-color="yelow"
          half-increments
          small
        />
        <p style="opacity: 0.4" class="ml-2 caption mt-3">
          (2000 {{ $i18n.t("reviews") }})
        </p>
      </span>

      <span class="d-flex justify-space-between align-center mt-2 px-2">
        <span class="d-flex align-center">
          <v-icon>mdi-clock-time-eight-outline </v-icon>
          <span class="ml-1">200 {{ $i18n.t("hour") }}</span>
        </span>

        <span class="d-flex align-center">
          <v-icon>mdi-white-balance-sunny </v-icon>
          <span class="mr-1">4 {{ $i18n.t("week") }}</span>
        </span>
      </span>
      <div v-if="btnShow" class="d-flex justify-center">
        <v-btn class="rounded-pill mt-4 px-8 ml-2 py-3 white--text" color="blue"
          >Learn course free
        </v-btn>
      </div>
    </span>
  </v-card>
</template>

<script>
export default {
  props: {
    btnShow: {
      type: Boolean,
      default: true,
    },
    getData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    model: null,
    rating: 2.5,
  }),
};
</script>

<style>
.texts {
  margin-left: 70px;
  color: #01fea5;
}

@media only screen and (max-width: 600px) {
  .card-responsive {
    width: 100%;
  }
  .texts {
    padding: 0px !important;
    margin: 0px !important;
  }
}
</style>
