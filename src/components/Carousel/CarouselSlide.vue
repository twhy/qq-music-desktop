<template>
  <div class="carousel-slide"
    :style="{ 
      zIndex,
      opacity,
      transform: `translateX(${ translate }px) scale(${ scale })`
    }">
    <slot></slot>
  </div>
</template>

<script>
const ACTIVE_Z_INDEX = 3

export default {
  name: 'carousel-slide',
  data() {
    return {
      active: false,
      scale: 1,
      index: 0,
      zIndex: 1,
      opacity: 1,
      translate: 0
    }
  },
  mounted() {
    this.index = [].indexOf.call(this.$parent.$children, this)
  },
  methods: {
    translateSlide(activeIndex) {
      if (this.index === activeIndex) {
        this.active = true
        this.scale = 1
        this.opacity = 1
        this.translate = 0
        this.zIndex = ACTIVE_Z_INDEX
        return
      } else {
        this.active = false
        this.scale = Math.max(1 - Math.abs(this.index - activeIndex) * .2, 0)
        this.zIndex = Math.abs(this.index - activeIndex) === 1 ? 2 : 0
        this.opacity = Math.abs(this.index - activeIndex) === 1 ? 1 : 0
        this.translate = (this.index - activeIndex + (this.index < activeIndex ? -1 : 1 )) * 80
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel-slide {
    position: absolute;
    transition: all 230ms ease-in-out;
  }
</style>

