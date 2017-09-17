<template>
  <div id="app">
    <Sidebar />
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="player"></div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: { Sidebar }
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/variables.scss';
</style>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    background-attachment: #F3F3F3;
  }

  .main {
    flex: 1;
  }

</style>
