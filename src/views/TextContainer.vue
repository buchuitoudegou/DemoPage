<template>
  <div class="text">
    <h2 class="title">about music</h2>
    <p class="text-description">
      Stream over 50 million songs, ad-free. Or download albums and tracks to listen to offline. <br>
      All the music in your personal iTunes library — no matter where it came from — lives right alongside the Apple Music catalog. <br>
      Start your free three-month trial with no commitment, and cancel anytime.
    </p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <img src="../assets/chess.jpg" style="width: 50%;"/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
  name: 'text-container'
})
export default class TextContainer extends Vue {}
</script>
<style>
.title {
  font-size: 2rem;
  color: black;
  margin-bottom: 3rem;
}
.text-description {
  line-height: 2;
  margin-bottom: 1rem;
  margin-top: 0;
}
</style>
