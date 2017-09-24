<template>
  <div class="overlay">
    <div :class="[paused && 'paused', 'icon']" @click="toggle"></div>
  </div>
</template>

<script>
export default {
  name: 'playable',
  data() {
    return {
      paused: false
    }
  },
  methods: {
    toggle() {
      this.paused = !this.paused
    }
  }
}
</script>

<style lang="scss" scoped>
  .overlay {
    top: 0;
    width: 100%;
    height: 100%;
    transition: .4s;
    opacity: 0;
    cursor: pointer;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      width: 45px;
      height: 45px;
      transition: opacity .4s;
      background: url(../../assets/images/icon-rank-play.png) no-repeat;
      background-size: 45px;
      &:hover {
        background-image: url(../../assets/images/icon-rank-play-hover.png);
      }
      &.paused {
        background-image: url(../../assets/images/icon-rank-pause.png);
        &:hover {
          background-image: url(../../assets/images/icon-rank-pause-hover.png);
        }
      }
    }
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, .5);
    }
  }
</style>

