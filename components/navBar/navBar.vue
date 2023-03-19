<template>
  <div class="d-flex justify-center nav-bar">
    <v-card width="84%" flat color="#183869" class="d-flex align-center">
      <v-btn @click="openSilderBar" class="hidden-sm-and-up" icon>
        <v-icon class="white--text">mdi-menu</v-icon>
      </v-btn>
      <div class="d-flex justify-space-between">
        <nuxt-link :to="localePath('/')" class="pa-3 white--text btn-res">
          {{ $i18n.t("home") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath({ name: 'courses' })"
          class="pa-3 white--text btn-res"
        >
          {{ $i18n.t("course") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath({ name: 'reviews' })"
          class="pa-3 white--text btn-res"
          >{{ $i18n.t("reviews") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath({ name: 'about' })"
          class="pa-3 white--text btn-res"
        >
          {{ $i18n.t("about") }}
        </nuxt-link>
        <nuxt-link
          :to="localePath({ name: 'contack' })"
          class="pa-3 white--text btn-res"
          >{{ $i18n.t("contact") }}
        </nuxt-link>

        <!-- <nuxt-link class="pa-3 white--text hidden-sm-and-down">
          {{ $i18n.t("blogs") }}
        </nuxt-link> -->
      </div>

      <v-spacer></v-spacer>

      <div>
        <lang />
        <v-btn
          text
          @click="openRegister('login')"
          class="caption white--text hidden-sm-and-down"
        >
          {{ $i18n.t("login") }}
        </v-btn>
        <v-btn
          @click="openRegister('register')"
          style="color: #183869"
          class="rounded-xl hidden-sm-and-down"
          >{{ $i18n.t("singup") }}
        </v-btn>
        <v-btn
          @click="lessons"
          style="color: #183869"
          class="rounded-xl hidden-sm-and-down"
          >lessons
        </v-btn>

        <v-btn
          @click="teach"
          style="color: #183869"
          class="rounded-xl hidden-sm-and-down"
          >teach
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import lang from "../lang/lang.vue";
export default {
  components: { lang },
  data() {
    return {};
  },
  methods: {
    openSilderBar() {
      this.$store.dispatch("menuShowRes", true);
    },

    openRegister(value) {
      this.$store.dispatch("registershow", true);

      if (value === "login") {
        this.$store.dispatch("islogin", true);
      } else if (value === "register") {
        this.$store.dispatch("islogin", false);
      }
    },
    lessons() {
      this.$router.push(
        this.localePath({
          name: "lessons-lessons",
        })
      );
    },
    teach() {
      this.$router.push(
        this.localePath({
          name: "teach-lessons",
        })
      );
    },
  },
};
</script>
<style>
* {
  list-style: none;
  text-decoration: none;
}
.nav-bar {
  width: 100%;
  height: 60px;
  background-color: #183869;
}
@media only screen and (max-width: 600px) {
  .btn-res {
    display: none !important;
  }
}
</style>
