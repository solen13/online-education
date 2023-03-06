<template>
  <v-card
    width="100%"
    height="140"
    color="#ECF5FB"
    class="d-flex align-center rounded-xl card-responsive"
    flat
  >
    <v-img
      max-width="100"
      height="100"
      class="rounded-xl ml-3"
      src="https://images.pexels.com/photos/12472262/pexels-photo-12472262.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ></v-img>
    <div class="ml-3">
      <span class="d-flex align-center title-responsive">
        <h2>Lorem Ipsum Clarck</h2>
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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        aliquid reprehenderit eligendi officiis fugiat voluptas error quae
      </p>
      <span>
        <span class="green--text">12 January 2020 year</span>
        <span class="ml-3 grey--text">JavaScript Developer</span>
      </span>
    </div>
  </v-card>
</template>
<style scoped>
.v-card {
  border: 1px solid #bababa !important;
}
@media only screen and (max-width: 500px) {
  .card-responsive {
    height: auto !important;
  }
  .title-responsive {
    display: block !important;
  }
}
</style>
<script>
export default {
  data() {
    return {
      rating: 3,
    };
  },
};
</script>
