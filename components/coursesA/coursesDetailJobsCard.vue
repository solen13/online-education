<template>
  <v-row style="width: 80%" class="mx-auto row-responsive">
    <v-col md="3">
      <v-card flat width="100%" class="blue-color" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="green-color" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="blue-color" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="green-color" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.blue-color {
  background-color: rgba(52, 152, 219, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  border-radius: 12px;
  padding: 30px 10px;
}
.blue-color h2 {
  color: rgba(52, 152, 219, 0.597) !important;
}
.blue-color h4 {
  color: #3498db;
}
.green-color {
  background: rgba(142, 255, 221, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  border-radius: 12px;
  padding: 30px 10px;
}
.green-color h2 {
  color: rgba(0, 222, 155, 0.455) !important ;
}
.green-color h4 {
  color: #00de9b;
}
@media only screen and (max-width: 600px) {
  .row-responsive {
    width: 100% !important;
  }
  .green-color {
    padding: 25px 5px !important;
  }
  .blue-color {
    padding: 25px 5px !important;
  }
}
</style>
