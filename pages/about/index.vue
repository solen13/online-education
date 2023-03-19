<template>
  <div>
    <aboutVideo />
    <aboutUser class="mx-auto" />
    <boring class="mt-8" />
    <imageGallery class="mx-auto mt-10" />
    <whatCard class="mt-8 mx-auto" />
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
