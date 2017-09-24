<template>
  <div class="tabs">
    <ul class="tabs-tabs">
      <li :class="['tabs-item', tab.active && 'active']" v-for="(tab, idx) in tabs" :key="idx">
        <a :href="tab.href" @click="change(tab, idx)" class="tabs-link">{{ tab.name }}</a>
      </li>
      <div :style="{ left: left }" class="tabs-line"></div>
    </ul>
    <div class="tabs-main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const TAB_OFFSET = 58

export default {
  name: 'tabs',
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  updated() {
    
  },
  methods: {
    change(tab, idx) {
      this.tabs.forEach(tab => tab.active = false)
      tab.active = true
    },
  },
  computed: {
    left() {
      return TAB_OFFSET * this.tabs.findIndex(tab => tab.active) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs-tabs {
    display: flex;
    position: relative;
    margin: 6px 0 25px 20px;
    border-bottom: 1px solid #f2f2f2;
  }
  .tabs-line {
    bottom: -1px;
    height: 2px;
    width: 28px;
    transition: .2s;
    position: absolute;
    background: var(--main-color);
  }
  .tabs-item {
    color: rgba(0,0,0,.9);
    &.active {
      .tabs-link {
         color: rgba(0,0,0,.9);
      }
    }
  }
  .tabs-link {
    font-size: 14px;
    line-height: 33px;
    margin-right: 30px;
    color: rgba(0,0,0,.6);
    &:hover {
      color: var(--main-color) !important;
    }
  }
</style>


