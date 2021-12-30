<template>
  <div id="app">
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/game-board.vue';

export default {
  name: 'App',
  components: {
    GameBoard,
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #333
  text-align: center
  max-width: 600px
  margin: 0 auto
</style>
