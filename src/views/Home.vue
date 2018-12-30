<template>
<div>
  <div id="overview" class="content">
    <el-carousel class="carousel"  height="100%" :interval="9000">
      <el-carousel-item class="img-wrapper" v-for="image in images" :key="image.key" :name="image.key">
        <img :class="`card-${image.key} card`" :src="image.imageUrl"/>
      </el-carousel-item>
    </el-carousel>
    <div style="position: relative; text-align: center; height: 5%; 
    color: #ffffff; background-color: #a8071a">explore</div>
  </div>
  <div class="content-inner" style="position: absolute; z-index: 1; 
  margin: auto; left:0;top:20vh;bottom:20vh;right:0; display: flex; justify-content: center; align-items: center;">
    <p class="description"  style="color: white; font-size: 3rem;">
      <span style="font-size: 5rem;">Itune.</span>
      <br>Your music, movies, and TV shows <br>take center stage.</p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  get images() {
    return [
      { key: '1', imageUrl: require('@/assets/bg1.jpg')},
      { key: '2', imageUrl: require('@/assets/bg2.jpg')}
    ];
  }
}
</script>

<style>
#overview {
  z-index: 0;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  justify-content: center;
}
.carousel {
  height: 95%;
  width: 100%;
}
.card {
  height: 100%;
  width: 100%;
}
#overview li.el-carousel__indicator {
  position: relative;
  z-index: 5;
}
</style>
