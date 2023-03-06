<template>
  <v-card class="d-flex card-contener" height="100%" width="100%">
    <sidebarDestop v-if="$vuetify.breakpoint.smAndUp" :data="sildeBar" />
    <!--v-if use -->
    <div v-else>
      <sidebarMobil v-if="$store.state.mobilSildeBar" :data="sildeBar" />
    </div>

    <div
      style="width: 86%; height: 100vh; overflow-y: auto"
      class="child-responsive"
    >
      <headerMenu />
      <nuxt-child />
    </div>
  </v-card>
</template>
<script>
import sidebarDestop from "../components/common/sidebarDestop.vue";
import sidebarMobil from "../components/common/sidebarMobil.vue";
import headerMenu from "../components/common/headerMenu.vue";
export default {
  components: { sidebarDestop, sidebarMobil, headerMenu },
  data() {
    return {
      drawer: false,
      group: null,

      sildeBar: [
        {
          title: "Lessons",
          icon: "mdi-star-outline",
          route: "/teach/lessons",
        },
        {
          title: "Inbox",
          icon: "mdi-inbox",
          route: "/teach/inbox",
        },
        {
          title: "Courses",
          icon: "mdi-near-me",
          route: "/teach/course",
        },
        {
          title: "Homework",
          icon: "mdi-note-edit-outline ",
          route: "/teach/homework",
        },
        {
          title: "Notification",
          icon: " mdi-bell-outline",
          route: "/teach/notification",
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
@media only screen and (max-width: 600px) {
  .resonsive-icon {
    display: block !important;
  }
  .child-responsive {
    width: 100% !important;
  }
  .title {
    font-size: 18px;
  }
}

.resonsive-icon {
  display: none !important;
}
</style>
