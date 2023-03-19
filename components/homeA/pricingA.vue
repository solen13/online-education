<template>
  <v-container>
    <h1
      style="color: #272d4e"
      class="text-center text-h2 pa-2 font-weight-bold"
    >
      Pricing
    </h1>

    <v-card width="80%" flat class="mx-auto mt-3 card">
      <div class="align-self-center card-left rounded-tl-xl rounded-bl-xl px-4">
        <v-list class="transparent">
          <h1 class="text-center pa-2"><b>Princing</b></h1>

          <v-list-item v-for="item in 5" :key="item">
            <v-icon color="blue-lighten-3">mdi-circle</v-icon>
            Lorem ipsum dolor sit amet
          </v-list-item>
        </v-list>

        <div class="d-flex justify-center">
          <v-btn color="blue" class="rounded-pill px-2 white--text"
            >get started</v-btn
          >
        </div>
      </div>

      <div class="medium-card rounded-xl px-4">
        <v-list class="transparent">
          <h1 class="text-center pa-2 white--text">Princing</h1>

          <v-list-item class="white--text" v-for="item in 6" :key="item">
            <v-icon color="blue-lighten-3">mdi-circle</v-icon>
            Lorem ipsum dolor sit amet
          </v-list-item>
        </v-list>

        <div class="d-flex justify-center">
          <v-btn color="blue" class="rounded-pill px-2 white--text"
            >get started</v-btn
          >
        </div>
      </div>

      <div
        class="align-self-center card-right px-4 rounded-br-xl rounded-tr-xl"
      >
        <v-list color="transparent ">
          <h1 class="text-center pa-2">Princing</h1>

          <v-list-item v-for="item in 5" :key="item">
            <v-icon color="blue-lighten-3">mdi-circle</v-icon>
            Lorem ipsum dolor sit amet
          </v-list-item>
        </v-list>

        <div class="d-flex justify-center">
          <v-btn color="blue" class="rounded-pill px-2 white--text"
            >get started</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-container>
</template>
<style scoped>
* {
  padding: 0;
}
.card {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .card {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100% !important;
    align-content: center;
  }
  .card-left {
    border: 1px solid #0038ff;
    border-radius: 30px !important;
  }
  .medium-card {
    margin: auto;
    margin-top: 10px;
  }
  .card-right {
    border: 1px solid #0038ff;
    border-radius: 30px !important;
    margin-top: 10px;
  }
}
.card-left {
  width: 300px;
  height: 350px;
  background: #f6f6f6;
  border-left: 1px solid #0038ff;
  border-top: 1px solid #0038ff;
  border-bottom: 1px solid #0038ff;
}
.card-right {
  width: 300px;
  height: 350px;
  background: #f6f6f6;
  border-right: 1px solid #0038ff;
  border-top: 1px solid #0038ff;
  border-bottom: 1px solid #0038ff;
}
.medium-card {
  width: 300px;
  height: 421px;
  border: 1px solid blue;
  background: linear-gradient(
    151.6deg,
    #247cff 2.59%,
    rgba(36, 124, 255, 0.4) 95.76%
  );
}
</style>
