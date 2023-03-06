<template>
  <v-row style="width: 80%" class="mx-auto">
    <v-col md="3">
      <v-card flat width="100%" class="blue" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="green" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="blue" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
    <v-col md="3" cols="6">
      <v-card flat width="100%" class="green" height="124">
        <h2>Current Jobs</h2>
        <h4>From scratch</h4>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.blue {
  background: rgba(52, 152, 219, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  border-radius: 12px;
  opacity: 0.7;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}
.green {
  background: rgba(142, 255, 221, 0.001);
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  opacity: 0.7;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column;
}
</style>
