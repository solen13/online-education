<template>
  <v-card
    width="80%"
    height="auto"
    flat
    class="d-flex justify-center align-center rounded-xl box-content mt-5 py-8 mb-4"
  >
    <v-card
      width="50%"
      max-height="auto"
      min-height="550"
      class="pa-4 from"
      flat
    >
      <v-form ref="form" v-model="form">
        <v-row>
          <v-col cols="12">
            <h2 class="display-1">
              Get in <span class="green--text">touch</span>
            </h2>
            <p class="mt-3">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </v-col>
          <v-col cols="12" class="mt-2">
            <v-text-field
              v-model="text.contackName"
              :rules="nameRules"
              :counter="10"
              placeholder="Contack name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="text.phone"
              :rules="phoneRules"
              :counter="10"
              placeholder="Contack phone"
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
              rows="1"
              row-height="7"
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
                I want to protect my data by signing an NDA
              </template>
            </v-checkbox>
          </v-col>

          <v-col cols="12" class="mt-2">
            <v-btn
              :disabled="!form"
              @click="submit"
              class="blue white--text btn"
              >Submit</v-btn
            >
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-space-between mt-3 flex-wrap"
            style="gap: 5px"
          >
            <span class="d-flex">
              <v-icon size="35" color="black">mdi-phone-in-talk-outline</v-icon>
              <div class="ml-2">
                <div class="black--text">phone</div>
                <a class="red--text" href="#">111-4344-34</a>
              </div>
            </span>
            <span class="d-flex">
              <v-icon size="35" color="black">mdi-email-open-outline</v-icon>
              <div class="ml-2">
                <div class="text--text">E-MAIL</div>
                <a class="red--text" href="#">info@company.com</a>
              </div>
            </span>
            <span class="d-flex">
              <v-icon size="35" color="black"
                >mdi-email-arrow-right-outline</v-icon
              >
              <div class="ml-2">
                <div class="text--text">HELPDESK</div>
                <a class="red--text" href="#">https://helpdesk.com</a>
              </div>
            </span>
          </v-col>
        </v-row>
      </v-form>
    </v-card>

    <v-card width="40%" height="550" class="ml-5 map" style="z-index: 2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49968.05086444807!2d43.393914819140626!3d38.48756858375048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1676803603360!5m2!1str!2str"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </v-card>
    <div class="end-box rounded-br-xl rounded-tr-xl"></div>
  </v-card>
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
      (v) => !!v || "telefon alanı boş bırakılmaz",
      (v) => v.length <= 11 || "Telfon alanı 11 hanli olmalı",
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
* {
  padding: 0;
}
.btn {
  width: 100% !important;
}
.box-content {
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  box-shadow: 0px 141px 200px -80px rgba(25, 58, 75, 0.3) !important;
  position: relative;
}
.end-box {
  position: absolute;
  right: 0;
  top: 0;
  background-color: #6de1c2;
  width: 200px;
  z-index: 0;
  height: 100%;
  border-bottom-left-radius: 0 !important;
}
@media only screen and (max-width: 900px) {
  .from {
    height: auto !important;
  }
}
@media only screen and (max-width: 700px) {
  .box-content {
    width: 95% !important;
  }
  .map {
    display: none;
  }
  .end-box {
    display: none;
  }
  .from {
    height: auto !important;
    width: 90% !important;
  }
}
</style>
