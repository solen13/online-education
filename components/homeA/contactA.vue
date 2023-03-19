<template>
  <div>
    <v-card
      width="100%"
      height="110vh"
      color="#255ED1"
      class="d-flex justify-center align-center"
    >
      <v-card
        flat
        width="498"
        min-height="583"
        max-height="auto"
        class="mt-3 pa-5 transparent"
      >
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

      <v-card class="ml-5 pa-5" width="498" min-height="583" max-height="auto">
        <v-form ref="form" v-model="form">
          <v-row>
            <v-col cols="12" class="mt-2">
              <v-text-field
                v-model="text.contackName"
                :rules="nameRules"
                :counter="10"
                placeholder="Name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="text.phone"
                :rules="phoneRules"
                :counter="10"
                placeholder="Subject"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="text.email"
                :rules="emailRules"
                placeholder="E-mail"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                auto-grow
                :rules="messageRules"
                v-model="text.message"
                rows="5"
                row-height="30"
                name="input-7-1"
                placeholder="Send message"
              ></v-textarea>
            </v-col>
            <v-col cols="12" class="mt-2">
              <v-checkbox
                v-model="agreement"
                :rules="required"
                color="deep-purple"
              >
                <template v-slot:label>
                  Gönderceğiniz mesajı onaylıyormusunuz
                </template>
              </v-checkbox>
            </v-col>

            <v-col cols="12" class="d-flex justify-center mt-1">
              <v-btn
                :disabled="!form"
                @click="submit"
                class="blue white--text btn"
                >Send -></v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    agreement: false,
    valid: false,
    form: false,
    text: {
      contackName: "",
      phone: "",
      email: "",
      message: "",
    },

    nameRules: [
      (v) => !!v || "İsim gerekli",
      (v) => v.length <= 10 || "isim 10 karakterden fazla olamaz",
    ],

    phoneRules: [
      (v) => !!v || "Konu alanı",
      (v) => v.length <= 22 || "konu alnı kısa tutu",
    ],

    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

    messageRules: [
      (v) => !!v || "Mesaj kısımı boş bırakılamaz",
      (v) => v.length <= 200 || "200  karekterden fazla girmesin",
    ],
    required: [(v) => !!v || "This field is required"],
  }),
  methods: {
    submit() {
      alert("tamadır krall");
      console.log(this.text, this.checkbox);
    },
  },
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
