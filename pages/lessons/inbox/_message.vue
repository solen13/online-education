<template>
  <div class="continer">
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

    <div class="message-contener px-2" ref="msgContainer">
      <template v-for="message in messages">
        <li
          class="message"
          :class="{
            'message-out': message.author === 'my',
            'message-in': message.author !== 'my',
          }"
        >
          {{ message.mesaage }}
        </li>
        <span
          :class="{
            'time-out': message.author === 'my',
            'time-in': message.author !== 'my',
          }"
        >
          {{ message.time }}</span
        >
      </template>
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
        v-model="messageText"
      ></v-textarea>

      <v-btn icon fab>
        <v-icon>mdi-attachment</v-icon>
      </v-btn>
      <v-btn @click="sendBtn" class="blue white--text" small fab>
        <v-icon>mdi-send-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import VueChatScroll from "vue-chat-scroll";

export default {
  components: { VueChatScroll },
  data() {
    return {
      messageText: "",
      messages: [
        {
          mesaage: "hocam merhaba",
          time: "12:23",
          author: "my",
        },
        {
          mesaage:
            "ödev hakkında bir sey soracaktım ödev hakkında bir sey soracaktım ödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktımödev hakkında bir sey soracaktım",
          author: "my",
          time: "12:24",
        },
        {
          mesaage: "Tabi sorabilirisin konu ne",
          author: "teach",
          time: "12:25",
        },
        {
          mesaage: "Ödevin ana başlıklarını nasıl yapcaktık onu yapamadım",
          author: "my",
          time: "12:43",
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
    sendBtn() {
      this.messages.push({
        mesaage: this.messageText,
        author: "my",
        time: "12:59",
      });
      this.messageText = "";
      setTimeout(() => {
        this.messages.push({
          mesaage: "Merhaba nasıl yardımcı olabilirim",
          author: "teach",
          time: "13:00",
        });
      }, 2000);
    },
  },
  watch: {
    messages: function () {
      this.$nextTick(function () {
        var container = this.$refs.msgContainer;
        container.scrollTop = container.scrollHeight + 120;
      });
    },
  },
};
</script>
<style scoped>
.message-input {
  width: 75%;
}
.continer {
  width: 100%;
  height: calc(100vh - 60px);
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

.time-in {
  color: rgb(115, 115, 115) !important;
  font-size: 12px;
}
.time-out {
  color: rgb(115, 115, 115) !important;
  margin-left: 90%;
  margin-top: -10px;
  font-size: 12px;
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
