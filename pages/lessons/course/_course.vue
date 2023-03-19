<template>
  <div style="width: 100%" class="d-flex justify-center container-responsive">
    <v-row v-if="getData" style="width: 100%" class="d-flex justify-center">
      <v-col cols="12" md="9" xl="9" class="pl-3 mt-2" style="padding: 0">
        <!-- <videoPlayer style="width: 100%" :src="getDatavideo.videSorce" /> -->

        <div style="width: 100%; height: 50%">
          <Artplayer
            @get-instance="getInstance"
            :option="option"
            :style="style"
          />
        </div>

        <div class="pl-9">
          <h2 class="mt-2">{{ getDatavideo.descaptionsTitle }}</h2>
          <p class="mt-4 message">{{ getDatavideo.descaptions }}</p>
          <v-btn v-if="isbtnText" @click="btnText" text color="blue--text"
            >devam</v-btn
          >
          <v-btn v-else @click="btnText" text color="blue--text">kısalt</v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="3" xl="3" class="list-container">
        <v-list class="mt-3 transparent">
          <v-list-item-group class="transparent">
            <v-list-item
              class="transparent"
              v-for="(item, index) in getData.course"
              active-class="active"
              :key="index"
            >
              {{ item.title }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Artplayer from "@/components/video/artplayer.vue";
import api from "@/constant/coursesList.js";
import videoPlayer from "@/components/video/videos.vue";
export default {
  components: { videoPlayer, Artplayer },
  data() {
    return {
      isbtnText: true,
      route: null,
      idRoute: null,
      //
      option: {
        url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        setting: true,
        fullscreen: true,

        autoSize: true,
        autoMini: true,

        playbackRate: true,

        fullscreen: true,

        quality: [
          {
            default: true,
            html: "SD 480P",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
          {
            html: "HD 720P",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          },
        ],
      },
      style: {
        width: "100%",
        height: "100%",
      },
    };
  },

  mounted() {
    this.route = this.$route.params.id;
    this.idRoute = this.$route.params.id;
  },
  methods: {
    btnText() {
      let text = document.querySelector(".message");

      this.isbtnText = !this.isbtnText;
      if (!this.isbtnText) {
        text.style.height = "100%";
      } else {
        text.style.height = "50px";
      }
    },
    routeBtn(index) {
      //  this.$router.push();
    },

    getInstance(art) {
      console.info(art);
    },
  },
  watch: {
    idRoute(val) {
      console.log(val);
    },
  },
  computed: {
    getData() {
      if (this.route) {
        return api[this.route];
      }
    },
    getDatavideo() {
      if (this.route) {
        return api[this.route].course[this.idRoute];
      }
    },
  },
};
</script>
<style scoped>
.list-container {
  height: 100vh;
  padding: 0;
  background-color: #f7f9fa;
}
.message {
  height: 50px;
  overflow: hidden;
}
@media only screen and (max-width: 600px) {
  .container-responsive {
    width: 96% !important;
  }
}
</style>
