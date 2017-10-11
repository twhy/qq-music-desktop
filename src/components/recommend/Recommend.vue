<template>
  <div class="recommend">
    <Carousel>
      <CarouselSlide v-for="(slide, index) in slides" :key="index">
        <img class="image" :src="slide.image">
      </CarouselSlide>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { image: "http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/148078.jpg" },
        { image: "http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/148163.jpg" },
        { image: "http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/148077.jpg" },
        { image: "http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/147822.jpg" },
        { image: "http://y.gtimg.cn/music/common/upload/t_focus_info_iphone/148096.jpg" }
      ]
    }
  },
  created() {

  }
}
</script>


<style lang="scss" scoped>
  .carousel {
    width: 525px;
    height: 210px;
    margin: auto;
    margin-top: 30px;
  }

  .image {
    width: 525px;
    height: 210px;
    display: block;
  }
</style>

