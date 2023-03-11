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
      <div v-if="teachControl" class="d-flex justify-center mt-2">
        <v-btn color="pink " class="white--text" small @click="update"
          >update</v-btn
        >
        <v-btn color="blue" small class="ml-1 white--text" @click="sss"
          >S.S.S</v-btn
        >

        <v-btn color="green" class="white--text ml-1" @click="confirm" small
          >detail</v-btn
        >
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
    teachControl: {
      type: Boolean,
      default: false,
    },
    detailClciked: {
      type: Boolean,
      default: false,
    },
    getData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    confirm(e) {
      this.$emit("clicked", "ugur");
      console.log(e);
    },
    update(e) {
      this.$emit("update", "ugur");
      console.log(e);
    },
    sss(e) {
      this.$emit("sss", "ugur");
      console.log(e);
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
