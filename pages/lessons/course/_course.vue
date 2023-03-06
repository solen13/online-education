<template>
  <v-container v-if="getData">
    <v-row style="width: 100%" class="d-flex justify-center">
      <v-col cols="12" md="8" xl="8">
        <v-card
          v-if="getDatavideo"
          flat
          elevation="0"
          tile
          class="transparent px-1"
          width="100%"
          height="100%"
        >
          <videoPlayer :src="getDatavideo.videSorce" />
          <div>
            <v-card height="100%" flat width="100%" class="pl-9">
              <h2 class="mt-2">{{ getDatavideo.descaptionsTitle }}</h2>
              <p class="mt-4 message">{{ getDatavideo.descaptions }}</p>
              <v-btn v-if="isbtnText" @click="btnText" text color="blue--text"
                >devam</v-btn
              >
              <v-btn v-else @click="btnText" text color="blue--text"
                >kısalt</v-btn
              >
            </v-card>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" xl="4">
        <v-list class="mt-3" rounded>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in getData.course"
              active-class="active"
              :key="index"
              @click="getLessonData(index)"
            >
              {{ item.title }} {{ index }}
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import api from "@/constant/coursesList.js";
import videoPlayer from "@/components/video/videos.vue";
export default {
  components: { videoPlayer },
  data() {
    return {
      isbtnText: true,
      route: null,
      idRoute: null,
    };
  },

  mounted() {
    this.route = this.$route.params.title;
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
.message {
  height: 50px;
  overflow: hidden;
}
</style>
