<template>
  <div>
    <h1 class="game-title">Simon Says</h1>
    <div class="container">
      <div class="game-board">
        <ul class="game-board__list">
          <GameButton 
            v-for="(button, index) in gameButtons"
            :button="button"
            :key="button"
            :value="index"
          />
        </ul>
      </div>
      <div class="game-control">
        <h2 class="game-control__title">Раунд: {{ round }}</h2>
        <button class="btn">Старт</button>
        <p>Извини, ты проиграл после {{ round }} раунда!</p>
        <h2 class="game-control__title">Уровень сложности:</h2>
        <ul class="game-control__list">
          <li v-for="item in gameLevels" :key="item.value" class="game-control__level">
            <input
              type="radio"
              :id="item.value"
              name="level"
              :value="item.value"
              v-model="level"
            >
            <label :for="item.value">
              {{ item.content }}
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import GameButton from './game-button.vue';

export default {
  name: 'GameBoard',
  components: {
    GameButton
  },
  data() {
    return {
      gameButtons: ["blue", "red", "yellow", "green"],
      gameLevels: { 
        easy: {
          value: "easy",
          content: "Легкий",
          mc: 1500,
        },
        middle: {
          value: "middle",
          content: "Средний",
          mc: 1000,
        },
        hard: {
          value: "hard",
          content: "Сложный",
          mc: 400,
        }
      },
      round: 0,
      level: "easy",
    }
  }
}
</script>

<style lang="sass">
.game-title
  margin: 30px 0 60px

.container
  display: flex
  flex-direction: row

.game-board
  background: #fff
  position: relative
  width: 302px
  height: 295px
  border-radius: 150px 150px 150px 150px
  margin-right: 20px

.game-board__list
  list-style: none
  margin: 0
  padding: 0

.game-control
  text-align: left

.game-control__title
  margin: 20px 0

.btn
  width: 5em
  box-sizing: border-box
  font-size: 1.4em
  border-radius: 10px 10px 10px 10px
  background: #6dabe8
  border: none
  padding: 0.3em 0.6em

.btn:hover
  background: #78bcff

.game-control__list
  list-style: none
  margin: 0
  padding: 0

.game-control__level
  margin: 0
  padding: 3px 0
</style>
