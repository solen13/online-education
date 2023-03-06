<template>
  <div>
    <aboutVideo />
    <aboutUser class="mx-auto" />
    <boring />
    <imageGallery class="mx-auto mt-5" />
    <whatCard />
    <bottom />
  </div>
</template>

<script>
import aboutVideo from "../../components/aboutA/aboutVideo.vue";
import aboutUser from "../../components/aboutA/aboutUser.vue";
import imageGallery from "../../components/aboutA/aboutImageGallary.vue";
import boring from "../../components/aboutA/aboutBoring.vue";
import whatCard from "../../components/aboutA/whatCard.vue";
import bottom from "../../components/aboutA/bottom.vue";
export default {
  components: { aboutVideo, aboutUser, imageGallery, boring, whatCard, bottom },
};
</script>
