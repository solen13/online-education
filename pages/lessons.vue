<template>
  <div class="d-flex">
    <div v-if="$vuetify.breakpoint.smAndUp" class="sidebars">
      <sidebarDestop class="sidebar-destop" :data="sidebar" />
      <!--v-if use -->
    </div>
    <div v-else>
      <sidebarMobil v-if="$store.state.mobilSildeBar" :data="sidebar" />
    </div>
    <div style="width: 100%">
      <headerMenu class="" />
      <nuxt-child />
    </div>
  </div>
</template>
<script>
import sidebarDestop from "../components/common/sidebarDestop.vue";
import sidebarMobil from "../components/common/sidebarMobil.vue";
import headerMenu from "../components/common/headerMenu.vue";
export default {
  layout: "students",
  components: { sidebarDestop, sidebarMobil, headerMenu },
  data() {
    return {
      drawer: false,
      group: null,

      sidebar: [
        {
          title: "Lessons",
          icon: "mdi-star-outline",
          route: "lessons-lessons",
        },

        {
          title: "Inbox",
          icon: "mdi-inbox",

          route: "lessons-inbox",
        },
        {
          title: "Courses",
          icon: "mdi-near-me",

          route: "lessons-course",
        },
        {
          title: "Homework",
          icon: "mdi-note-edit-outline ",
          route: "lessons-homework",
        },
        {
          title: "Notification",
          icon: " mdi-bell-outline",

          route: "lessons-notification",
        },
      ],
    };
  },
  methods: {
    inboxBtn() {
      this.$store.dispatch("windowBack", true);
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
}
.title {
  font-size: 24px;
  color: #141414;
  font-weight: 500;
}
.sidebars {
  width: 290px;
  height: 100vh;
  position: relative;
}
.sidebar-destop {
  position: fixed;
  top: 0;
  left: 0;
}
@media only screen and (max-width: 600px) {
}

.resonsive-icon {
  display: none !important;
}
</style>
