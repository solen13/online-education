<template>
  <v-card
    width="100%"
    height="140"
    flat
    color="#ECF5FB"
    class="rounded-xl d-flex align-center card-responsive"
  >
    <v-img
      max-width="100"
      height="100"
      class="rounded-xl ml-3"
      src="https://images.pexels.com/photos/12472262/pexels-photo-12472262.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ></v-img>

    <div class="ml-3">
      <span
        style="background: #247cff"
        class="rounded-pill px-3 py-1 caption white--text"
      >
        English
      </span>

      <h2 class="mb-1 mb-4 font-weight-regular">Loren ipsum clkck</h2>

      <span>
        <span class="green--text"> junuary 17</span>
        <span class="grey--text ml-4">7 week</span>
      </span>
    </div>
  </v-card>
</template>
<style scoped>
.v-card {
  border: 1px solid #bababa !important;
}
@media only screen and (max-width: 600px) {
  .card-responsive {
    height: auto !important;
  }
}
</style>
