<template>
  <div class="d-flex" style="width: 100%">
    <v-list class="destop">
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in message"
          class="mt-1"
          active-class="active"
          :key="i"
          :to="`/lessons/inbox/${item.name}`"
        >
          <messageBoxs :data="item" />
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div class="destopchild destop" style="width: 100%">
      <nuxt-child />
    </div>
    <!-- 600 px  -->
    <v-list class="mobil" v-if="$store.state.windowBack">
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in message"
          class="mt-1"
          active-class="active"
          :key="i"
          :to="`/lessons/inbox/${item.name}`"
          @click="route"
          link
        >
          <messageBoxs :data="item" />
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div class="mobil" v-else style="width: 100%">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
import messageBoxs from "@/components/lessons/inboxA/messageBox.vue";
import emtiyBox from "@/components/lessons/inboxA/entryBox.vue";
export default {
  data() {
    return {
      isShow: true,
      message: [
        {
          name: "Ali atak",
          time: "12:32 PM",
          message: "Hocam bugün ders varmı",
        },
        {
          name: "mehmet",
          time: "17:35 PM",
          message: "Hocam nasılsınız",
        },
        {
          name: "fatma ",
          time: "13:35 PM",
          message: "dersi anlamadım",
        },
        {
          name: "Naci",
          time: "22:35 PM",
          message: "pdf gelmedi",
        },
      ],
    };
  },
  components: { messageBoxs, emtiyBox },
  methods: {
    route() {
      this.$store.dispatch("windowBack", false);
    },
  },
  mounted() {
    this.$store.dispatch("windowBack", true);
  },
};
</script>
<style scoped>
@media only screen and (min-width: 600px) {
  .destop {
    display: block;
  }
  .mobil {
    display: none !important;
  }
}
@media only screen and (max-width: 600px) {
  .destop {
    display: none;
  }
  .mobil {
    display: block;
    width: 100% !important;
  }
}
@media only screen and (max-width: 750px) {
  .destopchild {
    display: none;
  }
}

.active {
  background-color: #cfe1ed !important;
}
</style>
