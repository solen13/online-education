<template>
  <v-card
    color="#F5F5F5"
    width="100%"
    height="80"
    class="d-flex justify-space-between align-center px-3 card-responsive"
  >
    <div class="d-flex align-center">
      <v-btn @click="upDateBtn" icon>
        <v-icon medium>mdi-pencil-outline</v-icon>
      </v-btn>
      <span class="d-flex ml-2 align-center">
        <v-card
          width="50"
          height="50"
          class="d-flex justify-center align-center grey"
        >
          <v-icon>mdi-play-circle-outline</v-icon>
        </v-card>
        <span class="ml-3 mt-3">
          <h4>{{ getData.title }}</h4>
          <p class="subtitle">
            {{ getData.subject }}
          </p>
        </span>
      </span>
    </div>
    <div>
      <v-btn @click="moveDown" icon>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn class="mr-2" @click="moveUp" icon>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn @click="removeItem" icon>
        <v-icon color="red">mdi-delete-outline</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    getData: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    upDateBtn(e) {
      this.$emit("upDate", "");
    },
    moveUp(e) {
      this.$emit("moveUp", "");
    },
    moveDown(e) {
      this.$emit("moveDown", "");
    },
    removeItem(e) {
      this.$emit("removeItem", "");
    },
  },
};
</script>
