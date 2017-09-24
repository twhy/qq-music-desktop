<template>
  <div class="radio-list-item">
    <div class="item-cover">
      <img class="item-image" :src="item.radioImg" alt="">
    </div>
    <div class="item-title">{{ item.radioName }}</div>
  </div>
</template>

<script>
export default {
  name: 'radio-list-item',
  props: {
    item: { required: true }
  }
}
</script>

<style lang="scss" scoped>
  .radio-list-item {
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .item-image {
    display: block;
    width: 133px;
    height: 133px;
  }
  .item-title {
    margin-top: 12px;
    font-size: 13px;
    font-weight: 400;
    max-height: 38px;
    margin-bottom: 2px;
    overflow: hidden;
  }
</style>




