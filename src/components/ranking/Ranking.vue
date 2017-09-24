<template>
  <div class="ranking">
    <div class="ranking-section">
      <div class="ranking-title peak"></div>
      <RankingList :list="rank[0].List" />
    </div>
    <div class="rankink-section">
      <div class="ranking-title global"></div>
      <RankingList :list="rank[1].List"/>
    </div>
  </div>
</template>

<script>
import json from '../../json/ranking'
import RankingList from './RankingList'

export default {
  data() {
    return {
      rank: json
    }
  },
  components: { RankingList }
}
</script>

<style lang="scss" scoped>
.ranking {
  padding: 15px 0 22px;
}

.ranking-title {
  height: 40px;
  margin-left: 20px;
  position: relative;
  border-bottom: 1px solid #efefef;
  padding-bottom: 15px;
  margin-bottom: 15px;
  &::before {
    content: "";
    background-size: 102px auto;
    background-image: url(../../assets/images/rank-title.png);
    height: 25px;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
  }
  &::after {
    content: "";
    background-size: 102px auto;
    background-image: url(../../assets/images/rank-title.png);
    height: 25px;
    position: absolute;
    top: 0;
    left: 80px;
    width: 102px;
  }
  &.peak::after {
    background-position: 0 -25px;
  }
  &.global::after {
    background-position: 0 -75px;
  }
}
</style>