<template>
  <div id="app">
    <Sidebar />
    <div class="main">
      <Navbar />
      <div class="view">
        <router-view></router-view>
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Player from './components/Player'
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: { Navbar, Player, Sidebar }
}
</script>

<style lang="scss">
  @import './assets/scss/reset.scss';
  @import './assets/scss/helpers.scss';
  @import './assets/scss/variables.scss';
</style>

<style lang="scss" scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-wrap: wrap;
    background-attachment: #F3F3F3;
  }

  .main {
    flex: 1;
    overflow: auto;
    height: calc(100vh - 60px);
    .view {
      overflow: auto;
      height: calc(100vh - 106px);
    }
  }

</style>
