<template>
  <div class="radio-list">
    <RadioListItem v-for="(item, index) in list" :key="index" :item="item" />
  </div>
</template>

<script>
import RadioListItem from './RadioListItem'

export default {
  name: 'radio-list',
  props: {
    list: { default: [] }
  },
  components: { RadioListItem }
}
</script>

<style lang="scss" scoped>
  .radio-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>


