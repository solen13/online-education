<template>
  <div class="card-content">
    <v-card
      width="50%"
      height="100%"
      class="mx-auto rounded-xl mt-1 card-responsive"
    >
      <div class="d-flex justify-end align-start pa-2">
        <v-btn fab small class="red white--text" @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="d-flex justify-center">
        <v-btn
          :class="{ active: logiOrRegister }"
          @click="loginRoute"
          class="head"
          text
        >
          Log In
        </v-btn>
        <v-btn
          :class="{ active: !logiOrRegister }"
          @click="singuUpRoute"
          class="head ml-5"
          text
        >
          Sing Up
        </v-btn>
      </div>
      <v-form v-model="form">
        <v-row style="width: 80%" class="mx-auto mt-4">
          <v-col cols="12">
            <v-text-field
              label="Email"
              placeholder="Email Address"
              outlined
              class="blue--text"
              type="email"
              prepend-inner-icon="mdi-email-outline"
              :rules="[rules.email]"
              v-model="text.email"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" v-if="!logiOrRegister">
            <v-text-field
              label="full name"
              placeholder="Full name"
              outlined
              class="blue--text"
              prepend-inner-icon="mdi-account-outline"
              :rules="[rules.name, rules.length(4)]"
              v-model="text.fullname"
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-if="!logiOrRegister"
              label="password"
              placeholder="password"
              outlined
              class="blue--text align-self-center"
              :type="show1 ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              :rules="[rules.password]"
              v-model="text.password"
            ></v-text-field>
            <v-text-field
              v-else
              label="password"
              placeholder="password"
              outlined
              class="blue--text align-self-center"
              :type="show1 ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
              v-model="text.oldPassword"
            ></v-text-field>
          </v-col>
          <v-col v-if="!logiOrRegister" cols="12" lg="6" md="6">
            <v-text-field
              label="Number"
              placeholder="Number"
              outlined
              class="blue--text"
              type="number"
              prepend-inner-icon="mdi-email-outline"
              v-model="text.number"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              v-if="logiOrRegister"
              class="blue white--text py-3"
              style="width: 100%"
              :disabled="!form"
            >
              Login
            </v-btn>
            <v-btn
              v-else
              class="blue white--text py-3"
              style="width: 100%"
              :disabled="!form"
            >
              Sing Up
            </v-btn>
          </v-col>
          <v-col cols="12">
            <p class="text-center">
              By logging in, you agree to DillBill's <br />
              <a href="#">Privacy</a> Policy and <a href="#">Terms of</a>
              Use.
            </p>
            <div class="d-flex justify-center align-center">
              <div class="line mr-2"></div>
              OR
              <div class="line ml-2"></div>
            </div>
            <div class="d-flex justify-center mt-5">
              <v-img max-width="30" height="30" src="/icon/google.png"></v-img>
              <v-img
                max-width="30"
                height="30"
                class="ml-2"
                src="/icon/apple.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>
<style scoped>
.active {
  color: #050038 !important;
  border-bottom: 3px solid #1a7fc1 !important;
}
.head {
  border-bottom: 3px solid #1a7ec14d;
  color: #0500385b;
  font-size: 32px;
  font-weight: 700;
  margin-top: 15px;
  border-radius: 0 !important;
}
.line {
  background-color: #696688 !important;
  height: 3px !important;
  width: 30% !important;
}
.card-content {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  background-color: rgba(128, 128, 128, 0.483);
}
@media only screen and (max-width: 700px) {
  .card-responsive {
    width: 95% !important;
  }
  .head {
    font-size: 24px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      form: false,
      show1: false,
      password: "Password",
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
        length: (len) => (v) =>
          (v || "").length >= len ||
          `Invalid character length, required ${len}`,
        password: (v) =>
          !!(v || "").match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/
          ) ||
          "Password must contain an upper case letter, a numeric character, and a special character",
        required: (v) => !!v || "This field is required",

        name: (v) => v.length <= 25 || "İsim bu kadar uzun olamaz",
        oldpassword: (v) => !!v || "password",
      },
      text: {
        email: "",
        password: "",
        oldPassword: "",
        fullname: "",
        number: "",
      },
    };
  },
  methods: {
    loginRoute() {
      this.$store.dispatch("islogin", true);
    },
    singuUpRoute() {
      this.$store.dispatch("islogin", false);
    },
    close() {
      this.$store.dispatch("registershow", false);
    },
  },
  computed: {
    logiOrRegister() {
      return this.$store.state.islogin;
    },
  },
};
</script>
