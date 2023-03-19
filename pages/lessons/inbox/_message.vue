<template>
  <div class="contenter">
    <div class="d-flex head align-center">
      <v-btn fab x-small class="mr-2 ml-2 back-btn" @click="backBtn">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-avatar class="ml-3" size="50">
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-avatar>
      <div class="ml-2 mt-2">
        <h1 class="name">Hamed</h1>
        <p class="job">Enlish teacher</p>
      </div>
    </div>

    <div class="message-contener px-2">
      <p
        v-for="message in messages"
        class="message"
        :class="{
          'message-out': message.author === 'my',
          'message-in': message.author !== 'my',
        }"
      >
        {{ message.mesaage }}
      </p>
    </div>
    <div class="d-flex mx-auto rounded-xl align-center message-input">
      <v-textarea
        auto-grow
        solo
        rows="1"
        row-height="7"
        name="input-7-1"
        label="Send message"
        class="text mt-7 ml-5"
      ></v-textarea>

      <v-btn icon fab>
        <v-icon>mdi-attachment</v-icon>
      </v-btn>
      <v-btn class="blue white--text" small fab>
        <v-icon>mdi-send-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        {
          mesaage: "hocam merhaba",
          author: "my",
        },
        {
          mesaage:
            "ödev hakkında bir sey soracaktım ödev hakkında bir sey soracaktım ödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktım",
          author: "my",
        },
        {
          mesaage: "Tabi sorabilirisin konu ne",
          author: "teach",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "my",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "teach",
        },

        {
          mesaage: "Tabi sorabilirisin konu ne",
          author: "teach",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "my",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "teach",
        },
        {
          mesaage: "Tabi sorabilirisin konu ne",
          author: "teach",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "my",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "teach",
        },
      ],
    };
  },
  mounted() {
    window.onpopstate = () => {
      this.$store.dispatch("windowBack", true);
    };

    this.$store.dispatch("windowBack", false);
  },
  methods: {
    backBtn() {
      this.$store.dispatch("windowBack", true);
      history.back();
    },
  },
};
</script>
<style scoped>
.message-input {
  width: 75%;
}
.contenter {
  width: 100%;
  height: 100%;
  background-color: #f1f4f7;
}
.head {
  width: 100%;
  height: 70px;
  background-color: white;
}
.name {
  color: black;
  font-size: 16px;
  font-weight: 100;
}
.job {
  font-weight: 400;
  font-size: 12px;
  color: #b9bec3;
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: 0.5em;
  /*   margin-bottom: .5em; */
  font-size: 0.8em;
}
.message-contener {
  height: 62vh;
  overflow-y: auto;
}
.message-out {
  background: #72808b !important;
  color: white !important;
  margin-left: 50%;
  border-radius: 10px;
}
.message-in {
  background: #e8ecef !important;
  color: black;
  border-radius: 10px;
}
.text {
  border-radius: 0 !important;
  padding-bottom: 0 !important;
}
@media only screen and (max-width: 600px) {
  .message-contener {
    height: 66vh;
  }
  .message-input {
    width: 100%;
    padding-bottom: 15px;
  }
  .back-btn {
    display: block;
  }
}
@media only screen and (min-width: 600px) {
  .back-btn {
    display: none;
  }
}
</style>
