<template>
  <div>
    <h1 class="text-center mt-2">We are definitely not boring</h1>
    <v-row style="width: 70%" class="mx-auto row-container mt-3">
      <v-col class="mx-auto" cols="6" v-for="item in 4" :key="item">
        <v-card flat height="250" class="pt-10 pl-6 card-content">
          <h2 style="font-size: 32px titleColor">Lorem ipsum</h2>
          <p style="line-height: 2.6; font-size: 22px">
            learing of the future in NOT Just about video tutorialcs.
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.card-content {
  background: linear-gradient(130.71deg, #ffffff 1.44%, #0bf0ff);
  border: 0.7px solid rgba(0, 0, 0, 0.3) !important;
  border-radius: 20px;
  width: 100%;
}
@media only screen and (max-width: 600px) {
  * {
    padding: 0;
  }
  .row-container {
    width: 97%;
  }
  .card-content {
    width: 98%;
    padding: 15px 10px !important;
  }
  p {
    line-height: 1.3 !important;
    margin-top: 5px;
  }
}
</style>
