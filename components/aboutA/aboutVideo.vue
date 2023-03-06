<template>
  <v-row
    class="d-flex justify-center mt-3 mx-auto res-continer"
    style="width: 80%"
  >
    <v-col cols="12" md="6" class="d-flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-BvS6PZbCws?start=8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </v-col>
    <v-col cols="12" md="6">
      <h1>Loremipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
        blanditiis perferendis officia dolorum velit minima labore vero
        veritatis repudiandae. Animi minima accusantium quaerat, laudantium quae
        eius iure temporibus dolorem saepe?
      </p>
    </v-col>
  </v-row>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .res-continer {
    width: 100% !important;
  }
}
</style>
