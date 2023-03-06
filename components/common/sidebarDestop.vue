<template>
  <v-card width="245" height="100vh" class="px-3">
    <div class="d-flex justify-center mt-5">
      <v-avatar size="90">
        <img src="https://randomuser.me/api/portraits/women/81.jpg" />
      </v-avatar>
    </div>
    <v-list class="mt-3" rounded>
      <v-list-item-group>
        <v-list-item
          active-class="active"
          class="pl-2"
          :to="localePath({ name: item.route })"
          v-for="(item, index) in data"
          :key="index"
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
      </v-list-item-group>
    </v-list>
    <v-spacer></v-spacer>
    <div class="d-flex justify-center">
      <div>
        <v-btn style="width: 87px; color: #364fc7" text>
          <v-icon>mdi-chevron-left</v-icon> {{ $i18n.t("logout") }}
        </v-btn>
        <v-btn style="color: #364fc7" text> {{ $i18n.t("privacy") }}</v-btn>
      </div>
    </div>
  </v-card>
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
  methods: {
    listBtnRouter() {
      alert();
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
