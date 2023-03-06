<template>
  <v-card width="80%" flat class="mx-auto card-responsive">
    <div
      style="width: 60%"
      class="mx-auto responsive-header d-flex justify-center"
    >
      <div>
        <span class="d-flex">
          <h1 style="font-size: 60px">COMMON</h1>

          <span class="align-self-center ml-3">
            <h5 class="">SOME QUESTİONS</h5>
            <h5 class="">PEPLE USALLY ASK</h5>
          </span>
        </span>

        <h1 style="font-size: 60px">QUESTIONS</h1>
      </div>
    </div>

    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header> Item </v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .card-responsive {
    width: 100% !important;
  }
  h1 {
    font-size: 32px !important;
  }
  h5 {
    font-size: 10px !important;
  }
  .responsive-header {
    width: 70% !important;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
