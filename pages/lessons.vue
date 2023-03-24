<template>
  <div class="d-flex">
    <div v-if="$vuetify.breakpoint.smAndUp" class="sidebars">
      <sidebarDestop class="sidebar-destop" :data="sidebar" />
      <!--v-if use -->
    </div>
    <div v-else>
      <sidebarMobil v-if="$store.state.mobilSildeBar" :data="sidebar" />
    </div>

    <div class="child-responsive" style="width: 80%">
      <headerMenu />
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
.child-responsive {
  width: 80%;
}
.sidebars {
  width: 20% !important;
  height: 100vh;
  position: relative;
}
.sidebar-destop {
  position: fixed;
  width: 20% !important;
  top: 0;
  left: 0;
}
@media only screen and (min-width: 1430px) {
  .child-responsive {
    width: 85% !important;
  }
  .sidebar-destop {
    width: 15% !important;
  }
  .sidebars {
    width: 15% !important;
  }
}

@media only screen and (max-width: 600px) {
  .child-responsive {
    width: 100% !important;
  }
}
</style>
