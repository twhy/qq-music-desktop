<template>
  <div class="carousel">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      data: {
        slides: [],
        activeIndex: 0
      }
    }
  },
  mounted() {
    this.slides = this.$children
    this.setActiveItem(Math.floor((this.slides.length - 1) / 2))
  },

  methods: {
    setActiveItem(index) {
      this.activeIndex = index
      this.slides.forEach(slide => slide.translateSlide(this.activeIndex))
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    position: relative;
  }
</style>
