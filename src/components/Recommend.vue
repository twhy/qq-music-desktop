<template>
  <div class="recommend">推荐</div>
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
    console.log('created', this.$root.$data.state)
  }
}
</script>

<style>
  .el-carousel__item--card {
    width: auto;
  }
</style>


<style lang="scss" scoped>
  .slice {
    .image {
      width: 525px;
      height: 210px;
    }
  }
</style>

