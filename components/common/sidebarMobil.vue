<template>
  <v-navigation-drawer v-model="drawer" absolute left temporary>
    <!-- :mini-variant.sync="mini" -->
    <div class="d-flex justify-center mt-5">
      <v-avatar size="90">
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-avatar>
    </div>
    <v-list rounded>
      <v-list-item-group>
        <v-list-item
          v-for="(item, index) in data"
          active-class="active"
          :key="index"
        >
          <v-icon class="ml-3">{{ item.icon }}</v-icon>
          <v-list-item-title class="ml-3"> {{ item.title }}</v-list-item-title>

          <div class="d-flex justify-end">
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
    <div
      style="width: 100%; height: 35%"
      class="d-flex justify-center align-end"
    >
      <div>
        <v-btn style="width: 87px; color: #364fc7" text>
          <v-icon>mdi-chevron-left</v-icon>log out</v-btn
        >
        <v-btn style="color: #364fc7" text>privacy</v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  layout: "students",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      drawer: true,
      group: null,
    };
  },
  methods: {
    inboxBtn() {
      this.$store.dispatch("windowBack", true);
    },
  },

  watch: {
    group(val) {
      console.log(val);
      this.drawer = false;
      //  this.$store.dispatch("mobilSildeBar", false);
    },
  },
  computed: {
    isShow() {
      //  return this.$store.state.mobilSildeBar;
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
</style>
