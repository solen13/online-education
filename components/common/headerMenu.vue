<template>
  <v-card
    flat
    tile
    color="#F6F6F6"
    height="60"
    class="d-flex justify-space-between"
  >
    <v-btn class="hidden-sm-and-up mt-4 ml-2" @click="menuBtn" icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <h1 class="ml-6 title mt-4">{{ $i18n.t($store.state.lessonsName) }}</h1>

    <div>
      <v-menu offset-y rounded="xl">
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            class="rounded-pill grey lighten-2 btn mt-3"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-chevron-down</v-icon>
            <p class="mt-4 name">kemal kılcdaroğlu</p>
            <v-icon x-large right class="grey--text">mdi-circle</v-icon>
          </v-btn>
        </template>

        <v-list class="px-5">
          <v-list-item
            v-for="(item, index) in drop"
            :key="index"
            link
            :to="localePath('lessons-profile')"
            class=""
          >
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title class="ml-1">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      drop: [
        { title: "Profile", icon: " mdi-account-outline" },
        { title: "Time zone", icon: "mdi-clock-outline" },
        { title: "Pricing", icon: "mdi-lifebuoy" },
        { title: "Support", icon: "mdi-help-circle-outline" },
      ],
    };
  },
  methods: {
    menuBtn() {
      this.$store.dispatch("mobilSildeBar", false);

      setTimeout(() => {
        this.$store.dispatch("mobilSildeBar", true);
      }, 50);
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90px;
  }
}
</style>
