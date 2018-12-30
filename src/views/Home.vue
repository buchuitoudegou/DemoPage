<template>
<div>
  <div id="overview" class="content">
    <el-carousel class="carousel"  height="100%" :interval="9000">
      <el-carousel-item class="img-wrapper" v-for="image in images" :key="image.key" :name="image.key">
        <img :class="`card-${image.key} card`" :src="image.imageUrl"/>
      </el-carousel-item>
    </el-carousel>
    <div style="position: relative; text-align: center; height: 5%; 
    color: #ffffff; background-color: #a8071a; font-size: 2rem;">explore</div>
  </div>
  <div class="content-inner" style="position: absolute; z-index: 1; 
  margin: auto; left:0;top:20vh;bottom:20vh;right:0; display: flex; justify-content: center; align-items: center;">
    <p class="description"  style="color: white; font-size: 3rem;">
      <span style="font-size: 5rem;">Itune.</span>
      <br>Your music, movies, and TV shows <br>take center stage.</p>
  </div>
  <div v-sticky :class="menuClass">
    <el-menu :default-active="selected" class="top-menu" mode="horizontal" 
    :background-color="menuStyle['background-color']" 
    :text-color="menuStyle['text-color']"
    :active-text-color="menuStyle['active-text-color']">
      <el-menu-item v-for="item of menu" :key="item.key" 
      @click="onClickTopMenuItem(item.scrollTo, -60, item.key)" :index="item.key">
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
  <TextContainer id="text"></TextContainer>
  <VideoContainer id="video"></VideoContainer>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextContainer from './TextContainer.vue';
import inView from 'in-view';
import VideoContainer from '@/views/VideoContainer.vue';

@Component({
  name: 'home',
  components: {
    TextContainer,
    VideoContainer
  }
})
export default class Home extends Vue {
  selected = '';
  isJumping = false;
  isSticky = false;
  get images() {
    return [
      { key: '1', imageUrl: require('@/assets/bg1.jpg')},
      { key: '2', imageUrl: require('@/assets/bg2.jpg')}
    ];
  }

  get menuStyle() {
    return this.isSticky
      ? {
          'background-color': '#a8071a',
          'text-color': '#ffffff',
          'active-text-color': '#ffa39e'
        }
      : {};
  }

  get menuClass() {
    return {
      ['content-menu']: true,
      sticky: this.isSticky
    };
  }

  get menu() {
    return [
      { name: 'TEXT', key: 'text', scrollTo: '#text' },
      { name: 'VIDEO', key: 'video', scrollTo: '#video' },
      { name: 'FLASH', key: 'flash', scrollTo: '#flash' },
    ];
  }

  onClickTopMenuItem(selector: string, offset?: number, key?: string) {
    this.isJumping = true;
    const ele = document.querySelector(selector);
    if (ele) {
      ele.scrollIntoView();
      this.isJumping = false;
    }
    if (key) {
      this.selected = key;
    }
  }

  mounted() {
    this.$nextTick(() => {
      this.isSticky = !inView.is(document.querySelector('#overview'));
    });
    this.menu.forEach((item) => {
      inView(item.scrollTo).on('enter', () => {
        if (!this.isJumping) {
          this.selected = item.key;
        }
      });
    });
    inView('#overview')
        .on('enter', () => {
          if (this.isSticky) {
            this.isSticky = false;
          }
        })
        .on('exit', () => {
          if (!this.isSticky) {
            this.isSticky = true;
          }
        });
  }
}
</script>

<style>
@keyframes bigger {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
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
  min-width: 1150px;
  min-height: 100%;
  animation: bigger 9s linear infinite;
  animation-direction: alternate;
}
#overview li.el-carousel__indicator {
  position: relative;
  z-index: 5;
}
.el-menu {
  display: flex;
  justify-content: center;
  transition: all 200ms;
}
</style>
