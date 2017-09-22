<template>
  <div class="ranking-list-item">
    <div class="image">
      <img :src="item.pic_v12">
      <div class="overlay">
        <div :class="[paused && 'paused', 'icon']" @click="toggle"></div>
      </div>
    </div>
    <ol class="songs">
      <li class="song ellipsis" v-for="(song, index) in item.songlist.slice(0, 3)" :key="index">
        <span class="rank">{{ index + 1 }}</span>
        <span class="name">{{ song.songname }}</span>
        <span class="artist">- {{ song.singername }}</span>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['item'],
  name: 'ranking-list-item',
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
  .ranking-list-item {
    width: 360px;
    display: flex;
    cursor: pointer;
    margin: 0 0 20px 20px;
  }
  .image {
    position: relative;
    img {
      display: block;
      width: 126px;
      height: 126px;
    }
    .overlay {
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      transition: .4s;
      background: rgba(0, 0, 0, 0);
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        opacity: 0;
        width: 45px;
        height: 45px;
        transition: opacity .4s;
        background: url(../assets/images/icon-rank-play.png) no-repeat;
        background-size: 45px;
        &:hover {
          background-image: url(../assets/images/icon-rank-play-hover.png);
        }
        &.paused {
          background-image: url(../assets/images/icon-rank-pause.png);
          &:hover {
            background-image: url(../assets/images/icon-rank-pause-hover.png);
          }
        }
      }
    }
    &:hover {
      .overlay {
        z-index: 1;
        background: rgba(0, 0, 0, .5);
      }
      .icon {
        opacity: 1;
      }
    }
  }
  .songs {
    color: #333;
    display: flex;
    font-size: 13px;
    flex-direction: column;
    justify-content: center;
    padding: 16px 10px 0 15px;
    &:hover {
      background: rgb(247, 247, 247);
    }
    .song {
      width: 210px;
      height: 32px;
      .rank { font-size: 15px; }
    }
  }
</style>


