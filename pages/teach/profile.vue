<template>
  <div class="px-3 pt-2">
    <div class="d-flex justify-space-between">
      <v-btn class="blue white--text rounded-xl">Go to home</v-btn>
      <v-btn class="green white--text rounded-xl">Save All changes</v-btn>
    </div>
    <v-row
      class="d-flex justify-center align-center row-container mx-auto rounded-xl px-7"
    >
      <v-col md="4" sm="12" cols="12" class="d-flex justify-center">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-card v-bind="attrs" v-on="on" width="100" height="100">profile </v-card>
          </template>
          <span>Change profile photo</span>
        </v-tooltip>
      </v-col>
      <v-col md="4" sm="6" cols="12" class="px-5">
        <v-text-field append-icon="mdi-draw-pen" label="Surname"></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Date of Birth"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
          </v-date-picker>
        </v-menu>

        <v-text-field
          label="New Password"
          placeholder="New Password"
          class="blue--text align-self-center"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
          label="retype new password"
          placeholder="retype new password"
          class="blue--text align-self-center"
          :type="show2 ? 'text' : 'password'"
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show2 = !show2"
        ></v-text-field>
      </v-col>
      <v-col md="4" sm="6" cols="12" class="px-5">
        <v-text-field append-icon="mdi-draw-pen" label="Surname"></v-text-field>
        <!-- <v-text-field label="number" type="number"></v-text-field> -->

        <v-text-field
          label="Old Password"
          placeholder="Old Password"
          class="blue--text align-self-center"
          :type="show3 ? 'text' : 'password'"
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show3 = !show3"
        ></v-text-field>

        <div class="d-flex justify-center">
          <v-btn @click="changeBtn" class="pink white--text rounded-xl pa-2">
            Change Password</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      myPhone: "",
      phone: {
        number: "",
        valid: false,
        country: undefined,
      },
      show1: false,
      show2: false,
      show2: false,
      menu: null,
    };
  },
  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
  methods: {
    changeBtn() {
      console.log("phone", this.phone, "myPhone", this.myphone);
    },
    onInput(formattedNumber, { number, valid, country }) {
      this.phone.number = number.international;
      this.phone.valid = valid;
      this.phone.country = country && country.name;
    },
  },
};
</script>

<style scoped>
.row-container {
  width: 100%;
  height: 330px;
  border: 1px solid rgba(0, 0, 0, 0.346);
  background-color: #f6fffe;
  margin-top: 15px;
}
@media only screen and (max-width: 960px) {
  .row-container {
    height: auto;
  }
}
</style>
>
