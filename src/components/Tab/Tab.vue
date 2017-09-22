<template>
  <div class="tab">
    <slot></slot>
  </div> 
</template>

<script>
export default {
  name: 'tab',
  props: {
    name: { required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>