<template>
  <div class="ranking-list-item">
    <div class="image">
      <img :src="item.pic_v12">
      <Playable/>
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
import Playable from '../shared/Playable'

export default {
  props: ['item'],
  name: 'ranking-list-item',
  components: { Playable }
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


