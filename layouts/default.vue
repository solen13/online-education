<template>
  <v-app>
    <v-main style="position: relative">
      <menuSiledBar v-if="$store.state.resMenu" />
      <register v-if="$store.state.register" />
      <navBar />
      <Nuxt />
      <footera />
    </v-main>
  </v-app>
</template>

<script>
import navBar from "../components/navBar/navBar.vue";
import footera from "../components/bottomFooterA/bottomFooter.vue";
import menuSiledBar from "../components/navBar/sildeBar.vue";
import register from "../components/userRegister/register.vue";
export default {
  name: "DefaultLayout",
  components: { navBar, footera, menuSiledBar, register },
};
</script>
