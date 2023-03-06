<template>
  <v-card
    width="150"
    height="100vh"
    color="#183869"
    style="position: fixed; z-index: 99; top: 0"
  >
    <div class="d-flex justify-end pa-2">
      <v-btn @click="close" fab small class="red white--text">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>

    <v-btn text :to="localePath({ name: '/' })" class="pa-3 white--text btn">
      {{ $i18n.t("home") }}
    </v-btn>
    <v-btn
      text
      :to="localePath({ name: 'courses' })"
      class="pa-3 white--text btn"
    >
      {{ $i18n.t("course") }}
    </v-btn>
    <v-btn
      text
      :to="localePath({ name: 'reviews' })"
      class="pa-3 white--text btn"
      >{{ $i18n.t("reviews") }}
    </v-btn>
    <v-btn
      text
      :to="localePath({ name: 'about' })"
      class="pa-3 white--text btn"
    >
      {{ $i18n.t("about") }}
    </v-btn>
    <v-btn
      text
      :to="localePath({ name: 'contack' })"
      class="pa-3 white--text btn"
      >{{ $i18n.t("contact") }}
    </v-btn>
    <v-btn text class="pa-3 white--text btn">
      {{ $i18n.t("blogs") }}
    </v-btn>

    <div class="d-flex justify-center mt-2">
      <v-btn class="rounded-xl white--text" outlined>
        {{ $i18n.t("login") }}
      </v-btn>
    </div>
    <div class="d-flex justify-center mt-2">
      <v-btn style="color: #183869" class="rounded-xl">
        {{ $i18n.t("singup") }}
      </v-btn>
    </div>
  </v-card>
</template>
<style scoped>
.btn {
  width: 100%;
}
</style>
<script>
export default {
  methods: {
    close() {
      this.$store.dispatch("menuShowRes", false);
    },
  },
};
</script>
