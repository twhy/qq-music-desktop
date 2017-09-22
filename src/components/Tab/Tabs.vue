<template>
  <div class="tabs">
    <ul class="tabs-tabs">
      <li v-for="(tab, idx) in tabs" :key="idx">
        <a href="#" class="tabs-link">{{ tab.name }}</a>
      </li>
    </ul>
    <div class="tabs-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  }
}
</script>

<style lang="scss" scoped>
  .tabs-tabs {
    display: flex;
    position: relative;
    margin: 6px 0 25px;
    border-bottom: 1px solid #f2f2f2;
  }
  .tabs-link {
    font-size: 14px;
    line-height: 33px;
    margin-right: 30px;
    color: rgba(0,0,0,.6);
  }
</style>


