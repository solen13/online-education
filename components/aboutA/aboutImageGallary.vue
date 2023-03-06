<template>
  <div>
    <h1 class="text-center">"Lorem FEST" event</h1>
    <v-row class="mt-4 mx-auto row-container" style="width: 80%">
      <v-col cols="12" md="6" class="d-flex align-center">
        <v-btn fab color="blue" small @click="prev">
          <v-icon class="white--text">mdi-chevron-left</v-icon>
        </v-btn>
        <v-window v-model="onboarding">
          <v-window-item v-for="n in imgArray" :key="`card-${n}`">
            <v-card height="330" width="740" class="rounded-xl">
              <v-img max-width="100%" height="100%" :src="n"></v-img>
            </v-card>
          </v-window-item>
        </v-window>

        <v-btn small fab color="blue" @click="next">
          <v-icon class="white--text">mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center align-center">
        <div>
          <v-item-group
            v-model="onboarding"
            class="text-center d-flex flex-wrap gallery-image"
            mandatory
            style="gap: 10px; width: 70%"
          >
            <v-item
              class="mx-auto"
              v-for="n in imgArray"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-card
                max-width="100"
                height="100"
                :input-value="active"
                @click="toggle"
              >
                <v-img :src="n" max-width="100%" height="100%"></v-img>
              </v-card>
            </v-item>
          </v-item-group>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "https://picsum.photos/500/300?image=15",
      onboarding: 0,
      imgArray: [
        "https://picsum.photos/500/300?image=15",
        "https://picsum.photos/500/300?image=14",
        "https://picsum.photos/500/300?image=23",
        "https://picsum.photos/500/300?image=45",
        "https://picsum.photos/500/300?image=56",
        "https://picsum.photos/500/300?image=34",
        "https://picsum.photos/500/300?image=154",
        "https://picsum.photos/500/300?image=143",
        "https://picsum.photos/500/300?image=145",
      ],
    };
  },

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
      console.log(this.onboarding);
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>
<style>
@media only screen and (max-width: 600px) {
  .gallery-image {
    width: 100% !important;
  }
  .row-container {
    width: 100% !important;
  }
}
</style>
