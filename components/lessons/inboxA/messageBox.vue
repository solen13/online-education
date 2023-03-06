<template>
  <v-card
    v-if="data"
    width="100%"
    height="70"
    flat
    tile
    class="d-flex align-center responsive-card px-2 transparent"
  >
    <v-avatar size="50">
      <img src="https://randomuser.me/api/portraits/women/81.jpg" />
    </v-avatar>
    <div class="ml-2 mt-3 res-contener">
      <div class="d-flex justify-space-between">
        <span class="name">{{ data.name }}</span>
        <span class="time">{{ data.time }}</span>
      </div>

      <p class="message">{{ data.message }}</p>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
.message {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 140px;
  font-size: 14px;
  color: #8a8a8a !important;
}
.res-contener {
  width: 100% !important;
}

.name {
  color: black;
  font-size: 16px;
  font-weight: 100;
}
.time {
  font-weight: 500;
  font-size: 11px;
  color: #727272;
}
</style>
