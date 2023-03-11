<template>
  <div class="px-3">
    <div class="d-flex justify-end">
      <v-btn class="blue white--text rounded-pill" @click="crate = true"
        >create</v-btn
      >
    </div>
    <v-card
      height="80"
      width="100%"
      color="#F5F5F5"
      class="d-flex justify-space-between align-center pa-3 rounded-xl mt-3"
      v-for="item in sendData"
      :key="item"
    >
      <div class="d-flex">
        <v-btn @click="updateBtn" icon>
          <v-icon>mdi-pencil-outline</v-icon>
        </v-btn>
        <span class="ml-3">
          <h3>Test çözüm örnekeleri</h3>
          <div class="sub-title">matehematics-mixed number</div>
        </span>
      </div>
      <v-btn @click="deleteBtn" fab icon>
        <v-icon medium class="red--text"> mdi-delete</v-icon>
      </v-btn>
    </v-card>
    <div v-if="crate" class="popap d-flex justify-center align-center">
      <v-card class="rounded-xl px-6" width="400" height="370">
        <div class="d-flex justify-end">
          <v-btn fab small class="red white--text" @click="crate = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <h4 class="text-center mb-2">Homework</h4>
        <v-text-field label="Title" placeholder="Title" outlined class="" />
        <v-text-field label="Subject" placeholder="Subject" outlined class="" />
        <div class="d-flex justify-center mb-3">
          <v-btn
            color="primary"
            class="text-none"
            outlined
            depressed
            :loading="isSelecting"
            @click="onButtonClick"
          >
            <v-icon left> mdi-cloud-upload </v-icon>
            {{ buttonText }}
          </v-btn>
          <input
            ref="uploader"
            class="d-none"
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            @change="onFileChanged"
          />
        </div>
        <div class="d-flex justify-center">
          <v-btn @click="sendBtn" class="blue white--text">Send</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      crate: false,

      defaultButtonText: "Drop PDF",
      selectedFile: null,
      isSelecting: false,
      sendData: ["test", "test"],
    };
  },
  computed: {
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultButtonText;
    },
  },
  methods: {
    updateBtn() {
      alert();
      this.crate = true;
    },
    deleteBtn() {
      alert();
    },
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // do something
      console.log(this.selectedFile);
    },

    sendBtn() {
      this.sendData.push("data");
      this.crate = false;
    },
  },
  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", "homework");
  },
};
</script>
<style scoped>
h3 {
  color: #141414;
  font-size: 20px;
}
.sub-title {
  font-size: 16px;
  color: #141414;
  font-weight: 400;
}
#exampleCheck {
  width: 32px;
  height: 32px;
  margin-top: 10px;
  opacity: 0.5;
}
#exampleCheck:hover {
  opacity: 1;
}
.popap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(177, 177, 184, 0.188);
  z-index: 99;
}
</style>
