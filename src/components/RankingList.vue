<template>
  <div class="ranking-list">
    <RankingListItem v-for="(item, index) in list" :item="item" :key="index"></RankingListItem>
  </div>
</template>

<script>
import RankingListItem from './RankingListItem'

export default {
  name: 'ranking-list',
  props: ['list'],
  components: { RankingListItem }
}
</script>

<style lang="scss" scoped>
  .ranking-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>





