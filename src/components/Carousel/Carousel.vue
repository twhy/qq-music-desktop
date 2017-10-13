<template>
  <div class="carousel">
    <slot></slot>
    <ul class="dots">
      <li :class="['dot', activeIndex === i - 1 && 'active']"
          v-for="i in slides.length" :key="i" @click="setActiveSlide(i - 1)"></li>
    </ul>
    <div class="arrow prev" @click="prev"></div>
    <div class="arrow next" @click="next"></div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      slides: [],
      activeIndex: 0
    }
  },
  mounted() {
    this.slides = this.$children
    this.setActiveSlide(Math.floor((this.slides.length - 1) / 2))
  },

  methods: {
    setActiveSlide(index) {
      if (index < 0) this.activeIndex = this.slides.length - 1
      else if (index >= this.slides.length) this.activeIndex = 0
      else this.activeIndex = index
      this.slides.forEach(slide => slide.translateSlide(this.activeIndex))
    },
    prev() {
      this.setActiveSlide(this.activeIndex - 1)
    },
    next() {
      this.setActiveSlide(this.activeIndex + 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel {
    user-select: none;
    position: relative;
    &:hover .arrow { opacity: 1; }
  }
  .dots {
    z-index: 9;
    display: flex;
    left: 50%;
    bottom: 8px;
    cursor: pointer;
    position: absolute;
    transform: translateX(-50%);
    .dot {
      width: 7px;
      height: 7px;
      margin: 4px;
      border-radius: 50%;
      background: rgba(255, 255, 255, .4);
      &.active {
        background: rgba(255, 255, 255, .9);
      }
    }
  }
  .arrow {
    top: 45%;
    opacity: 0;
    z-index: 9;
    width: 13px;
    height: 23px;
    cursor: pointer;
    transition: .2s;
    position: absolute;
    background-size: 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAuBAMAAADEjxRGAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAYXUsmhYm3QAAAC5JREFUKM9jYBBkQAKMLgJIPBMXRyQekwuKpMqoJFwSwUNVOaKl4KkHM2WhpjoAlHIbezDg1KIAAAAASUVORK5CYII=);
  }
  .prev {
    left: -93px;
    transform: rotate(-180deg);
  }
  .next {
    right: -93px;
  }
</style>
