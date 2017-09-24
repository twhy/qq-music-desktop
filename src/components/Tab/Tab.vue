<template>
  <div class="tab" v-show="active">
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: { required: true },
    href: { default: '' },
    selected: { default: false }
  },
  data() {
    return {
      active: false
    }
  },
  created() {
    this.active = this.selected
  }
}
</script>

<style lang="scss" scoped>

</style>