<template>
  <v-row style="width: 80%" class="row-responsive mx-auto mb-4">
    <v-col cols="12" sm="6" md="6" class="d-flex justify-center align-center">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/-BvS6PZbCws?start=8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </v-col>
    <v-col cols="12" sm="6" md="6" class="px-6">
      <span class="">
        <h1>Lorem Ipsum</h1>
        <v-rating
          v-model="rating"
          dense
          readonly
          size="22"
          color="yellow"
          half-increments
          class="ml-2"
          background-color="yellow"
        />
      </span>

      <span class="d-flex my-5">
        <span class="grey--text">13 january 2021</span>
        <span class="d-flex ml-2">
          <p class="grey--text">course:</p>
          <p class="blue--text">lorem ipsum</p>
        </span>
      </span>

      <p style="width: 380px" class="grey--text text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      rating: 2,
    };
  },
};
</script>
<style scoped>
* {
  padding: 0;
}
@media only screen and (max-width: 850px) {
  .row-responsive {
    width: 100% !important;
  }
  .text {
    width: 100% !important;
  }
}
</style>
