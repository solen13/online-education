<template>
  <div class="banner pl-6">
    <span>
      <h1 class="display-3 pa-6">{{ $i18n.t("firsttextbanner") }}</h1>
      <h1 class="display-3 pa-6">{{ $i18n.t("secondtextbanner") }}</h1>
      <p class="pa-6">
        {{ $i18n.t("thirdtextbanner") }}
      </p>
    </span>
    <span class="ml-4 mb-4">
      <v-btn color="blue" class="rounded-xl white--text">
        {{ $i18n.t("firstBannerBtn") }}</v-btn
      >
      <v-btn color="blue" class="rounded-xl ml-1 white--text">
        {{ $i18n.t("contact") }}</v-btn
      >
    </span>
    <div class="icons"></div>
    <div class="book"></div>
  </div>
</template>

<style>
.banner {
  width: 85%;
  height: 400px;
  border-radius: 0px 0px 450px 75px;
  background: linear-gradient(89.84deg, #00ffa3 0.14%, #0085ff 145.77%);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  color: white;
}
.book {
  width: 250px;
  height: 250px;
  background-image: url("../../static/homeImage/book.png");
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 53px;
}
.icons {
  width: 290px;
  height: 290px;
  background-image: url("../../static/homeImage/icons.png");
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 70px;
  margin-right: 120px;
}
@media only screen and (max-width: 600px) {
  .banner {
    width: 100% !important;
    height: auto;
    border-radius: 0 !important;
    padding-bottom: 10px;
  }
  .book {
    display: none;
  }
  .icons {
    display: none;
  }
}
</style>
