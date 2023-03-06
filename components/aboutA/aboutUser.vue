<template>
  <v-row style="width: 80%" class="mx-auto res-container">
    <v-col cols="12" md="8" class="d-flex align-center">
      <div>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <v-row class="row-continer">
        <v-col class="" cols="6">
          <v-card width="150" height="150" color="#38FFB7" class="rounded-xl">
            <span class="display-2" style="opacity: 0.6">
              <b>2013</b>
            </span>
            <span>
              <b>student</b>
            </span>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card color="#38FFB7" width="150" height="150" class="rounded-xl">
            <span class="display-2" style="opacity: 0.6"> </span>
            <span>
              <b>course</b>
            </span>
          </v-card>
        </v-col>

        <v-col class="col-continer-user" cols="6">
          <v-card color="#38FFB7" width="150" height="150" class="rounded-xl">
            <span class="display-2" style="opacity: 0.6">
              <b>8+</b>
            </span>
            <span>
              <b>Year is trainig</b>
            </span>
          </v-card>
        </v-col>

        <v-col class="col-continer-user" cols="6">
          <v-card color="#38FFB7" width="150" height="150" class="rounded-xl">
            <span class="display-2" style="opacity: 0.6">204</span>
            <p>View</p>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped>
@media only screen and (max-width: 600px) {
  .res-container {
    width: 100% !important;
  }
  .col-continer-user {
    margin-top: 5px;
  }
}
</style>
