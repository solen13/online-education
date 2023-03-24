<template>
  <v-card tile height="100vh" class="px-3">
    <div class="d-flex justify-center mt-5">
      <v-avatar size="90">
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-avatar>
    </div>
    <v-list class="mt-3" rounded>
      <v-list-item-group>
        <v-list-item
          active-class="active"
          class="pl-2 black--text"
          :to="localePath({ name: item.route })"
          v-for="(item, index) in data"
          :key="index"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title class="ml-3">
            {{ $i18n.t(item.title) }}</v-list-item-title
          >
          <div if="notification" class="d-flex justify-end">
            <p
              style="background: #364fc7"
              class="mr-3 px-2 rounded-xl mt-2 white--text"
            >
              45
            </p>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div class="d-flex justify-center align-end sidebar-bottom">
      <div>
        <div class="d-flex justify-center">
          <lang />
        </div>
        <div class="d-flex justify-center">
          <div>
            <v-btn @click="logout" style="width: 87px; color: #364fc7" text>
              <v-icon>mdi-chevron-left</v-icon> {{ $i18n.t("logout") }}
            </v-btn>
            <v-btn style="color: #364fc7" text> {{ $i18n.t("privacy") }}</v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>
<script>
import lang from "@/components/lang/lang.vue";
export default {
  layout: "students",
  component: { lang },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  methods: {
    logout() {
      this.$router.push(this.localePath("/"));
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
}
.active {
  background-color: #364fc7 !important;
  color: white !important;
}
/*
@media only screen and (min-width: 1390px) {
  .sidebar-bottom {
    height: 46% !important;
  }
}
@media only screen and (min-width: 1804px) {
  .sidebar-bottom {
    height: 55% !important;
  }
}

*/
.sidebar-bottom {
  position: absolute;
  bottom: 0;
  margin-left: 10%;
  margin-bottom: 10px;
}
</style>
