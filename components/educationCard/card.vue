<template>
  <v-card
    v-if="getData"
    width="280"
    class="ml-4 d-flex flex-column justify-center"
    flat
    height="417"
  >
    <div v-if="teachControl" class="d-flex justify-end">
      <v-menu bottom origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-pen</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="update"> Update </v-list-item>
          <v-list-item @click="sss"> S.S.S </v-list-item>
          <v-list-item @click="confirm"> Detail </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-card flat class="rounded-xl" style="height: 160px; width: 100%">
      <v-img
        width="100%"
        height="100%"
        src="https://img-c.udemycdn.com/course/240x135/4993934_0107_4.jpg"
      ></v-img>
    </v-card>

    <span class="mt-2 px-3">
      <h2 class="">{{ getData.title }}</h2>
      <div class="d-flex align-center justify-space-between">
        <span>
          <v-rating
            v-model="rating"
            dense
            readonly
            size="25"
            color="warning "
            background-color="grey"
            half-increments
          />
        </span>
        <h6 style="opacity: 0.4" class="ml-2 subtitle-2">
          (2000 {{ $i18n.t("reviews") }})
        </h6>
      </div>

      <span class="d-flex justify-space-between align-center mt-1">
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
        <v-btn class="rounded-pill mt-3 px-8 ml-2 py-3 white--text" color="blue"
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
