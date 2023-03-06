<template>
  <v-app>
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center align-center">
        <div class="ml-5">
          <h2 class="text-h2 font-weight-black">Ooops...</h2>
          <p class="text-h3 mt-2">Page not found 404</p>

          <p class="text-subtitle-1">
            The page you are looking for doesn’t exist or an other error
            occurred, go back to home page
          </p>

          <v-btn @click="back" class="blue white--text px-8 mt-7"
            >Go back</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="image">
        <v-img
          max-width="100%"
          height="450"
          contain
          src="/errorpage/errorimage.png"
          class="image-responsive"
        ></v-img>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .image {
    display: none;
  }
}
</style>
