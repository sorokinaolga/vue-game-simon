<template>
  <li 
    :class="`game-board__item game-board__item--${button}`"
    :value="value"
  ></li>
</template>

<script>
export default {
  name: 'GameButton',
  props: {
    button: {
      type: String,
    },
    value: {
      type: Number,
    }
  }
}
</script>

<style lang="sass">
.game-board__item
  margin: 0
  padding: 0
  opacity: 0.6
  transition: opacity 250ms ease
  height: 290px
  border-radius: 150px 150px 150px 150px
  position: absolute
  text-indent: 10000px
  cursor: pointer

.game-board__item:hover
  border: 2px solid black

.game-board__item.active
  opacity: 1

.game-board__item--red
  background: #ff5643
  clip: rect(0px, 300px, 150px, 150px)
  width: 296px

.game-board__item--blue
  background: #1e90ff
  clip: rect(0px, 150px, 150px, 0px)
  width: 300px

.game-board__item--yellow
  background: #feef33
  clip: rect(150px, 150px, 300px, 0px)
  width: 300px

.game-board__item--green
  background: #bede15
  clip: rect(150px,300px, 300px, 150px)
  width: 296px
</style>
