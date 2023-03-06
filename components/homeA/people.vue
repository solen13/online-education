<template>
  <div>
    <h1 class="text-center text-h2 font-weight-bold mt-2">
      Supported by real people
    </h1>

    <p class="mx-auto text-center grey--text mt-4" style="width: 446px">
      Our team of Happiness Engineers works remotely <br />
      from 58 countries providing customer support <br />
      across multiple time zones.
    </p>
    <div class="peopleImage"></div>

    <div class="bottom-acitve d-flex justify-center align-center">
      <span class="text-h4 text-white">
        WooCommerce - the
        <b>
          most <br />
          customizable eCommerce platform <br />
        </b>
        for building <b>your online business.</b>
      </span>
      <v-btn outlined color="blue" class="ml-16 rounded-pill">
        <span class="white--text font-weight-bold">Get Started</span>
      </v-btn>
    </div>
  </div>
</template>
<style>
.peopleImage {
  width: 100%;
  height: 150px;

  background-image: url("@/static/homeImage/people.png");
  background-position: center;
}

.bottom-acitve {
  width: 100%;
  height: 130px;
  background: linear-gradient(89.84deg, #00ffa3 0.14%, #0085ff 145.77%);
}
</style>
