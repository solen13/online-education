<template>
  <v-card
    width="276"
    height="320"
    class="rounded-xl pt-3 px-4 res-card"
    elevation="3"
    color="#F6F6F6"
  >
    <div class="d-flex justify-center">
      <v-avatar size="50">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div class="ml-4">
        <h6 class="body-1 gray--text">English Teacher</h6>
        <h1>Mike Halsey</h1>
      </div>
    </div>
    <v-divider class="mt-6"></v-divider>
    <div class="d-flex justify-space-between mt-7">
      <div>
        <span class="d-flex justify-center align-center">
          <v-icon size="30">mdi-calendar-range</v-icon>
          <span class="ml-1">{{ $i18n.t("date") }}</span>
        </span>
        <h4 style="color: #040432" class="font-weight-regular text-center mt-1">
          17 January
        </h4>
        <div class="mt-8">
          <v-avatar size="30">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-avatar size="30" class="">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
          <v-avatar size="30" class="">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
      </div>
      <div>
        <span class="d-flex justify-center align-center">
          <v-icon size="30">mdi-clock-outline</v-icon>
          <span class="ml-1">{{ $i18n.t("time") }}</span>
        </span>
        <h4 style="color: #040432" class="font-weight-regular text-center mt-1">
          22:30-23:40
        </h4>

        <span class="d-flex align-center mt-8">
          <span class="body-2">{{ $i18n.t("subject") }}-</span>
          <h3 class="subtitle-1 font-weight-bold">English</h3>
        </span>
      </div>
    </div>
    <div class="d-flex justify-center mt-5 mb-5">
      <v-btn class="blue white--text rounded-xl">{{ $i18n.t("join") }}</v-btn>
    </div>
  </v-card>
</template>
<style scoped>
h1 {
  font-size: 16px;
  color: #141414;
}
@media only screen and (max-width: 750px) {
  .res-card {
    height: auto !important;
  }
}
</style>
