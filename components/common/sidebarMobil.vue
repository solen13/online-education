<template>
  <v-navigation-drawer v-model="drawer" absolute left temporary>
    <!-- :mini-variant.sync="mini" -->
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
          v-for="(item, index) in data"
          :key="index"
          :to="localePath({ name: item.route })"
          @click="inboxBtn"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <v-list-item-title class="ml-3">
            {{ $i18n.t(item.title) }}</v-list-item-title
          >
          <div class="d-flex justify-end">
            <p
              style="background: #364fc7"
              class="mr-3 px-2 rounded-xl mt-2 white--text"
            >
              45
            </p>
          </div>
        </v-list-item>
        <v-list
          style="margin-top: 60%; with: 100%"
          class="d-flex justify-center align-end"
        >
          <div>
            <div class="d-flex justify-center mb-2">
              <lang />
            </div>
            <div class="d-flex justify-center">
              <div>
                <v-btn
                  style="width: 87px; color: #364fc7"
                  text
                  :to="localePath('/')"
                >
                  <v-icon>mdi-chevron-left</v-icon> {{ $i18n.t("logout") }}
                </v-btn>
                <v-btn style="color: #364fc7" text>
                  {{ $i18n.t("privacy") }}</v-btn
                >
              </div>
            </div>
          </div>
        </v-list>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
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
.active {
  background-color: #364fc7 !important;
  color: white !important;
}
</style>
