<template>
  <v-row style="width: 90%" class="mx-auto mt-4">
    <v-col cols="12" md="6">
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
    <v-col cols="12" md="6">
      <div>
        <h1>One Course</h1>
        <p
          style="
            width: 500px;
            line-height: 50px !important;
            font-size: 24px;
            color: #050038;
            opacity: 0.6;
          "
          class="text-responsive"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
        <span class="d-flex">
          <v-btn color="#247CFF" class="rounded-pill white--text mt-3">
            Get Started
          </v-btn>
          <p class="mt-5 ml-3">
            <b>Free</b>
          </p>
        </span>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .image-responsive {
    width: 100% !important;
  }
  .text-responsive {
    width: 100% !important;
  }
}
</style>
