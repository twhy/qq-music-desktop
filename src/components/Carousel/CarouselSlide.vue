<template>
  <div class="carousel-slide"
    :style="{ 
      zIndex,
      opacity,
      transform: `translateX(${ translate }px) scale(${ scale })`
    }" @click="activate">
    <slot></slot>
  </div>
</template>

<script>
const ACTIVE_Z_INDEX = 3
const SECOND_Z_INDEX = 2

export default {
  name: 'carousel-slide',
  data() {
    return {
      total: 0,
      scale: 1,
      index: 0,
      zIndex: 1,
      opacity: 1,
      translate: 0
    }
  },
  mounted() {
    this.total = this.$parent.$children.length
    this.index = [].indexOf.call(this.$parent.$children, this)
  },

  methods: {
    activate() {
      this.$parent.setActiveSlide(this.index)
    },

    offsetTo(target) {
      if (this.index === target) return 0
      if (this.index === 0 && target === this.total - 1) return 1
      if (this.index === this.total - 1 && target === 0) return -1
      if (this.index === (target + 2) % this.total) return 2
      if ((this.index + 2) % this.total === target) return -2
      return this.index - target
    },

    translateSlide(activeIndex) {
      let offset = this.offsetTo(activeIndex)
      if (offset === 0) {
        this.scale = 1
        this.opacity = 1
        this.translate = 0
        this.zIndex = ACTIVE_Z_INDEX
      } else {
        this.zIndex = Math.abs(offset) === 1 ? SECOND_Z_INDEX : 0
        this.opacity = Math.abs(offset) === 1 ? 1 : 0
        if (Math.abs(offset) < 3) {
          this.scale = 1 - 0.2 * Math.abs(offset)
          this.translate = (offset + (offset > 0 ? 1 : -1)) * 80
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel-slide {
    cursor: pointer;
    position: absolute;
    transition: all 230ms ease-in-out;
  }
</style>

