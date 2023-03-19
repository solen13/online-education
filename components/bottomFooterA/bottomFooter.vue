<template>
  <div flat style="background: #15316a; width: 100%; height: 218px" class="px-16 py-7">
    <div class="d-flex justify-space-between">
      <v-card width="333" height="73">LOGO</v-card>

      <div class="d-flex align-center">
        <span class="grey--text">follow us on</span>

        <v-btn icon size="small" color="blue" class="ml-3">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon size="small" color="blue" class="ml-3">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon size="small" color="blue" class="ml-3">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon size="small" color="blue" class="ml-3">
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider thickness="2" class="mt-3"></v-divider>

    <div class="d-flex justify-space-between pt-5">
      <span class="white--text">Copyright by rfch.world</span>

      <div>
        <nuxt-link to="/" class="pa-3 white--text">
          {{ $i18n.t("home") }}
        </nuxt-link>
        <nuxt-link to="/" class="pa-3 white--text">
          {{ $i18n.t("course") }}
        </nuxt-link>
        <nuxt-link to="/" class="pa-3 white--text">{{ $i18n.t("reviews") }} </nuxt-link>
        <nuxt-link to="/" class="pa-3 white--text">
          {{ $i18n.t("about") }}
        </nuxt-link>
        <nuxt-link to="/" class="pa-3 white--text">{{ $i18n.t("contact") }} </nuxt-link>
        <nuxt-link to="/" class="pa-3 white--text">
          {{ $i18n.t("blogs") }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style></style>
