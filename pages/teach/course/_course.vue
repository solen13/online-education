<template>
  <div>
    video
    <video
      id="example-video"
      preload
      width="600"
      height="360"
      class="video-js vjs-default-skin"
      controls
    >
      <source
        src="https://mediaservicerainet02-euno.streaming.media.azure.net/f484203b-6165-4bb1-95a9-1005e57afe72/test_10min.ism/manifest(format=m3u8-aapl)?v=123"
        type="application/vnd.apple.mpegurl"
      />
    </video>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
  created() {
    let urlName = this.$route.fullPath;
    urlName = urlName.split("/")[2];
    this.$store.dispatch("lessonsName", urlName);
  },
};
</script>
<style scoped>
#resizer,
footer {
  background-color: #eceef1;
  color: #868688;
  padding: 3px 10px;
}

.footer-text {
  padding: 3px;
  display: block;
}

footer .copyright {
  float: left;
}

footer .other-links {
  margin: 0;
  padding: 0;
  float: right;
}

footer .other-links li {
  display: inline;
}

footer .logo {
  display: none;
}
</style>
