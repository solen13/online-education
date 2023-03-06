<template>
  <div>
    <v-card
      width="100%"
      height="110vh"
      color="#255ED1"
      class="d-flex justify-center align-center"
    >
      <v-card flat width="498" height="583" class="mt-3 pa-5 transparent">
        <span>
          <label class="yellow--text">Contact us</label>
          <h2 class="white--text">
            <b>Get in touch with us about anything.</b>
          </h2>
        </span>

        <div class="mt-16">
          <div>
            <label class="grey--text">Email address</label>
            <p class="white--text"><b>contact@trydus.com</b></p>
          </div>
          <div class="mt-16">
            <label class="grey--text">Phone</label>
            <p class="white--text"><b>+1-305-3059</b></p>
          </div>
          <div class="mt-16">
            <label class="grey--text">Head office</label>
            <p class="white--text"><b>274 Marinor Street, NY-10007</b></p>
          </div>
        </div>
      </v-card>

      <v-card class="ml-5 pa-5" width="498" height="583">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="Name"
                required
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="subject"
                :rules="subjectRules"
                :counter="20"
                label="Subject"
                required
                variant="solo"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                variant="solo"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Text" variant="solo"></v-textarea>
            </v-col>

            <v-col cols="12" class="d-flex justify-center">
              <v-btn
                color="blue"
                style="width: 100%"
                class="py-3 d-flex mb-3 white--text"
              >
                <span>Send</span>
                <v-icon class="ml-4">mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    subject: "",
    nameRules: [
      (value) => {
        if (value) return true;

        return "Name requred";
      },
      (value) => {
        if (value?.length <= 10) return true;

        return "Name must be less than 10 characters.";
      },
    ],
    subjectRules: [
      (value) => {
        if (value) return true;

        return "Subject Requred";
      },
      (value) => {
        if (value?.length <= 20) return true;

        return "subject must be less than 20 characters.";
      },
    ],
    email: "",
    emailRules: [
      (value) => {
        if (value) return true;

        return "E-mail is requred.";
      },
      (value) => {
        if (/.+@.+\..+/.test(value)) return true;

        return "E-mail must be valid.";
      },
    ],
  }),

  methods: {},
};
</script>
<style scoped>
.contack-card {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-content: center;
}
</style>
