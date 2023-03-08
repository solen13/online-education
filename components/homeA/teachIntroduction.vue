<template>
  <v-row class="d-flex mx-auto contener-res" style="width: 80%">
    <v-col>
      <v-card
        width="320"
        height="376"
        flat
        color="#ecf5fb"
        class="rounded-xl pa-3 mx-auto"
      >
        <li class="d-flex align-center py-9" v-for="item in 3">
          <v-icon style="color: #2f4590" class="align-self-start" size="x-large"
            >mdi-home</v-icon
          >
          <p style="color: #2f2f2f" class="ml-3 text-subtitle-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </li>
      </v-card>
    </v-col>

    <v-col>
      <v-card
        height="376"
        width="100%"
        flat
        color="#ecf5fb"
        class="rounded-xl pa-3 cardres"
      >
        <v-window v-model="onboarding">
          <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
            <v-row
              class="transparent d-flex justify-space-between pa-4 cardres row-responsive"
            >
              <v-col md="8" cols="12">
                <div>
                  <h1 style="color: #2f4590">kamil Magammeddov</h1>
                  <h5 style="color: #2f4590; opacity: 0.5">Englis Teacher</h5>
                  <p style="color: #727272" class="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    sit venenatis, ullamcorper non dui, tincidunt tellus. Amet
                    euismod nibh ultrices morbi congue eget facilisis. Feugiat
                    nulla neque, sed ac s.
                  </p>
                </div>
              </v-col>
              <v-col md="4" cols="12">
                <v-img
                  max-width="300"
                  height="300"
                  contain
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
                ></v-img>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item
              v-for="n in length"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn :color="active ? 'blue' : 'grey'" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0,
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 > this.length ? 1 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 <= 0 ? this.length : this.onboarding - 1;
    },
  },
  mounted() {
    setInterval(() => {
      this.onboarding =
        this.onboarding + 1 > this.length ? 1 : this.onboarding + 1;
    }, 4000);
  },
};
</script>
<style scoped>
.right-banner {
  background-color: #ecf5fb;
}
.cardres {
  width: 100%;
  height: 300px;
}
@media only screen and (max-width: 600px) {
  .cardres {
    height: auto !important;
    width: 100%;
    height: 300px;
  }
  .contener-res {
    width: 100% !important;
  }
  .row-responsive {
    flex-wrap: wrap-reverse;
  }
}
</style>
