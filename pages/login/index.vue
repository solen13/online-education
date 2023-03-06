<template>
  <v-app>
    <v-main class="mb-3">
      <v-card
        width="50%"
        height="100vh"
        class="mx-auto rounded-xl mt-5 card-responsive"
      >
        <div class="d-flex justify-center">
          <nuxt-link to="/login" class="head" active-class="active">
            Log In
          </nuxt-link>
          <nuxt-link to="/singup" class="head ml-5" active-class="active">
            Sing Up
          </nuxt-link>
        </div>

        <v-row style="width: 80%" class="mx-auto mt-4">
          <v-col cols="12">
            <v-text-field
              label="Email"
              placeholder="Email Address"
              outlined
              class="blue--text"
              type="email"
              prepend-inner-icon="mdi-email-outline"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="password"
              placeholder="password"
              outlined
              class="blue--text align-self-center"
              :type="show1 ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            ></v-text-field>
            <div class="d-flex justify-end">
              <a href="#">Forget password?</a>
            </div>
          </v-col>
          <v-col cols="12">
            <v-btn class="blue white--text py-3" style="width: 100%"
              >Login</v-btn
            >
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
      </v-card>
    </v-main>
  </v-app>
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
}
.line {
  background-color: #696688 !important;
  height: 3px !important;
  width: 30% !important;
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
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",
    };
  },
};
</script>
