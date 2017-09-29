<template>
  <div class="navbar">
    <div class="refresh">

    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 46px;
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
  }
  .refresh {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 5px;
    background: url(../assets/images/icon-refresh.png);
    background-size: 20px;
    &:hover {
      background-image: url(../assets/images/icon-refresh-hover.png);
    }
  }
</style>