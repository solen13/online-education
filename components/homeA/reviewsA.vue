<template>
  <div class="reviews-contener">
    <h2 style="color: #272d4e" class="text-center text-h2 font-weight-bold">
      Reviews
    </h2>

    <v-window
      show-arrows
      class="mx-auto mt-16 window"
      style="width: 600px; z-index: 99"
    >
      <template v-slot:prev="{ on, attrs }">
        <v-btn color="info resposive-btn" fab v-bind="attrs" v-on="on"
          ><v-icon>mdi-chevron-left</v-icon></v-btn
        >
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn color="info resposive-btn" fab v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>

      <v-window-item class="mx-auto" v-for="n in 5" :key="`card-${n}`">
        <v-card
          elevation="2"
          height="275"
          width="493"
          class="ma-2 rounded-xl px-12 pt-2 reviews-card-responsive"
        >
          <span class="d-flex aligin-center">
            <v-avatar size="90">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
            <span class="ml-2">
              <h1 class="text-blue">Mikel Cekson</h1>
              <v-rating
                v-model="item"
                dense
                half-increments
                readonly
                size="14"
                color="yellow"
              ></v-rating>
            </span>
          </span>

          <p class="text-h5 mt-4 text-center">
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More important
          </p>
        </v-card>
      </v-window-item>
    </v-window>

    <div class="background-left hidden-xs-only">
      <v-avatar style="margin-left: 60%" size="90">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-avatar style="margin-top: 40%" size="40">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-avatar style="margin-top: 40%; margin-left: 60%" size="50">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>

    <div class="background-right hidden-xs-only">
      <v-avatar size="60">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <v-avatar style="margin-left: 50%; margin-top: 40%" size="90">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <v-avatar style="margin-top: 40%" size="50">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>

    <div class="green-bla hidden-xs-only"></div>
    <div class="red-bla hidden-xs-only"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0,
    item: 5,
  }),
};
</script>
<style scoped>
.reviews-contener {
  margin-top: 150px !important;
}
@media only screen and (max-width: 600px) {
  .resposive-btn {
    display: none;
  }
  .reviews-contener {
    height: auto !important;
  }
  .reviews-card-responsive {
    width: 90% !important;
    height: auto !important;
  }
  .window {
    width: 100%;
  }
}
.reviews-contener {
  position: relative;
  width: 100%;
  height: 700px;
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  ) !important;
}
.background-left {
  width: 300px;
  height: 700px !important;
  position: absolute;

  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
}
.background-right {
  width: 300px;
  height: 700px !important;
  position: absolute;

  z-index: 1;
  top: 0;
  right: 0;
  display: flex;
  flex-flow: column;
}

.green-bla {
  width: 200px;
  height: 300px;
  position: absolute;
  margin-top: -5%;
  margin-left: 25%;
  background-image: url("@/static/homeImage/green.png");
}
.red-bla {
  width: 200px;
  height: 300px;
  position: absolute;
  right: 0;
  margin-top: -20%;
  margin-right: 20%;
  background-image: url("@/static/homeImage/red.png");
}
</style>
