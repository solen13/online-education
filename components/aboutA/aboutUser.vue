<template>
  <v-row style="width: 80%" class="mx-auto res-container">
    <v-col cols="12" md="8" class="d-flex align-center">
      <div>
        <h1>Lorem ipsum</h1>
        <p style="line-height: 2.6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
    </v-col>
    <v-col cols="12" md="4">
      <v-row class="row-continer">
        <v-col class="" cols="6">
          <v-card
            width="150"
            height="150"
            color="#38FFB7"
            class="rounded-xl d-flex align-center"
          >
            <div class="ml-1" style="opacity: 0.6">
              <span class="display-2 font-weight-bold">2213</span>
              <br />
              <span class="title font-weight-bold">Student</span>
            </div>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            width="150"
            height="150"
            color="#38FFB7"
            class="rounded-xl d-flex align-center"
          >
            <div class="ml-1" style="opacity: 0.6">
              <span class="display-2 font-weight-bold">12</span>
              <br />
              <span class="title font-weight-bold">Course</span>
            </div>
          </v-card>
        </v-col>

        <v-col class="col-continer-user" cols="6">
          <v-card
            width="150"
            height="150"
            color="#38FFB7"
            class="rounded-xl d-flex align-center"
          >
            <div class="ml-1" style="opacity: 0.6">
              <span class="display-2 font-weight-bold">8+</span>
              <br />
              <span class="title font-weight-bold">Year is training</span>
            </div>
          </v-card>
        </v-col>

        <v-col class="col-continer-user" cols="6">
          <v-card
            width="150"
            height="150"
            color="#38FFB7"
            class="rounded-xl d-flex align-center"
          >
            <div class="ml-1" style="opacity: 0.6">
              <span class="display-2 font-weight-bold">204</span>
              <br />
              <span class="title font-weight-bold">Reviews</span>
            </div>
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
