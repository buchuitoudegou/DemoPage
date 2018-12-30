<template>
<div id="video-wrapper">
  <div class="video-bg"></div>
  <div id="video-content">
    <h2>Music Video</h2>
    <img src="../assets/carly.jpg" class="avatar"/>
    <p style="margin-top: 3rem; width: 30rem; margin: 0 auto;">
      "Call Me Maybe" is a song recorded by Canadian singer-songwriter Carly Rae Jepsen for her EP Curiosity (2012) which also appears on her second studio album, Kiss (2012). The song was written by Jepsen and Tavish Crowe as a folk song, but its genre was modified to pop following the production by Josh Ramsay. It was released as the lead single from the EP on September 20, 2011, through 604 Records. 
      Just tap to play, or even download if you’re going somewhere you won’t have Wi-Fi.
    </p>
    <video controls id="video-src">
      <source src="../assets/Carly Rae Jepsen - Call Me Maybe.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  name: 'video-container'
})
export default class VideoContainer extends Vue {}
</script>
<style>
.video-bg {
  position: absolute;
  margin-top: 2rem;
  height: 98vh;
  width: 100%;
  background-image: url('../assets/carly.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  z-index: 0;
}
#video-content {
  top: 5rem;
  position: relative;
  z-index: 1;
  text-align: center;
  color: #262626;
  font-size: 1rem;
}
#video-content h2 {
  font-size: 3rem;
  color: #8c8c8c;
}
#video-content video {
  margin-top: 3rem;
  width: 30%;
}
.avatar {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}
</style>
