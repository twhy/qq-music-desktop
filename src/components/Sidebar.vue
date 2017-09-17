<template>
  <aside class="sidebar">
    <div class="section user">

    </div>
    <div class="section music-house">
      <div class="title">音乐馆</div>
      <div class="links">
        <router-link class="link recommend" to="/">精选</router-link>
        <router-link class="link ranking" to="/ranking">排行</router-link>
        <router-link class="link playlist" to="/playlist">歌单</router-link>
        <router-link class="link radio" to="/radio">电台</router-link>
        <router-link class="link mv" to="/mv">MV</router-link>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 200px;
    background: rgb(238, 242, 246);
    height: calc(100vh - 60px);
  }
  .section {
    margin: 0 15px;
    &.user {
      height: 155px;
      border-bottom: 1px solid #e8e8e8;
    }
    .title {
      color: #777;
      font-size: 12px;
      margin: 18px 0 7px 8px;
    }
  }
  .link {
    color: #222;
    display: block;
    height: 26px;
    display: flex;
    align-items: center;
    font-size: 13px;
    border-radius: 3px;
    padding-left: 28px;
    transition: .1s;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 5px;
    $icons: recommend ranking playlist radio mv;
    @each $item in $icons {
      &.#{$item} {
        background-image: url(../assets/images/icon-#{$item}.png);
        &.router-link-exact-active {
          background-image: url(../assets/images/icon-#{$item}-active.png);
        }
      }
    }
  }
  .router-link-exact-active {
    color: #fff;
    background-color: var(--main-color);
  }
</style>
