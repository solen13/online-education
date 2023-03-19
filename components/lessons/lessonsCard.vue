<template>
  <v-card
    width="276"
    height="320"
    class="rounded-xl pt-3 px-4 res-card"
    elevation="3"
    color="#F6F6F6"
  >
    <div class="d-flex justify-center">
      <v-avatar size="50">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div class="ml-4">
        <h6 class="body-1 gray--text">English Teacher</h6>
        <h1>Mike Halsey</h1>
      </div>
    </div>
    <v-divider class="mt-6"></v-divider>
    <div class="d-flex justify-space-between mt-7">
      <div>
        <span class="d-flex justify-center align-center">
          <v-icon size="30">mdi-calendar-range</v-icon>
          <span class="ml-1">{{ $i18n.t("date") }}</span>
        </span>
        <h4 style="color: #040432" class="font-weight-regular text-center mt-1">
          17 January
        </h4>
        <div class="mt-8 d-flex">
          <div
            class="avatar-content rounded-circle"
            v-for="(item, index) in avatars"
            :key="index"
          >
            <v-avatar class="borders" size="30">
              <img v-if="item.src != null" :src="item.src" alt="John" />
              <div
                v-else
                class="blue d-flex justify-center align-center"
                style="height: 100%; width: 100%"
              >
                <span class="white--text">{{ getData(item.name) }}</span>
              </div>
            </v-avatar>
          </div>
          <div>
            <v-avatar class="grey borders" style="margin-left: -15px" size="30">
              <v-icon small color="grey darken-4"
                >mdi-account-plus-outline</v-icon
              >
            </v-avatar>
          </div>
        </div>
      </div>
      <div>
        <span class="d-flex justify-center align-center">
          <v-icon size="30">mdi-clock-outline</v-icon>
          <span class="ml-1">{{ $i18n.t("time") }}</span>
        </span>
        <h4 style="color: #040432" class="font-weight-regular text-center mt-1">
          22:30-23:40
        </h4>

        <span class="d-flex align-center mt-8">
          <span class="body-2">{{ $i18n.t("subject") }} -</span>
          <h3 class="subtitle-1 font-weight-bold ml-1">English</h3>
        </span>
      </div>
    </div>
    <div class="d-flex justify-center mt-5 mb-5">
      <v-btn class="blue white--text rounded-xl">{{ $i18n.t("join") }}</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      avatars: [
        {
          alt: "John Smitt",
          id: 1,
          presence: "Online",
          name: "Frontend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/10.jpg",
        },
        {
          alt: "Joanne Swizzlette",
          id: 2,
          name: "jack Nace",
          role: "Automation Engineer",
          src: null,
        },
        {
          alt: "Frankie Dowle",
          id: 4,
          presence: "Online",
          name: "Adem Naa",
          role: "Platform Architect",
          src: null,
        },
      ],
    };
  },
  methods: {
    getData(item) {
      item.toUpperCase();
      let name = item.split(" ")[0].charAt(0);
      let surname = item.split(" ")[1].charAt(0);
      console.log("isim=>", name + surname);
      return name + surname;
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 16px;
  color: #141414;
}
.avatar-content {
  margin-left: -15px;
}
.borders {
  border: 2px solid rgb(255, 255, 255) !important;
}
.avatar-content:first-child {
  margin-left: 0px;
}

@media only screen and (max-width: 750px) {
  .res-card {
    height: auto !important;
  }
}
</style>
