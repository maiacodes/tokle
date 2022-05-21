<template>
    <div class="correct">
      <h2 v-if="correct">You got it!</h2>
      <h2 v-if="ranOut">You ran out of guesses ):</h2>

      <p v-if="correct">You guessed the right album cover in just {{ skips }} tries, well done!</p>
      <p v-if="ranOut">Better luck tomorrow!</p>
      <button v-on:click="share(true)">Share your results with friends!</button>
      <button v-on:click="share(false)">Copy results to clipboard!</button>
    </div>
</template>

<script>
import {getTextDate} from "~/scripts/audios";

export default {
  name: "Correct",
  computed: {
    skips() {
      return this.$store.state.skips
    },
    correct() {
      return this.$store.state.correctSkip
    },
    ranOut() {
      return this.$store.state.ranOut
    }
  },
  methods: {
    share(sheet) {
      let blocks = "";
      for (let step = 0; step < this.skips; step++) {
        if (step+1 === this.skips) {
          blocks += "🟩"
        } else {
          blocks += "🟥"
        }
      }

      let shareText = `Tokle ${getTextDate(new Date())}: ${blocks}\nPlay at https://tokle.app`
      if (sheet) {
        try {
          navigator.share({
            text: shareText
          })
        } catch {
          this.$store.commit("setModal", "shareError")
        }
      } else {
        try {
          navigator.clipboard.writeText(shareText)
        } catch {
          prompt("We couldn't copy to your clipboard automatically, so you can copy directly from here!", shareText)
        }
        this.$store.commit("setModal", "copied")
      }
    }
  }
}
</script>

<style scoped>
.correct {
  border-style: solid;
  border-color: #26b933;
  min-height: 60px;
  background-color: #558030;
  margin-bottom: 20px;
  text-align: center;
  color: #b0eab5;
  margin-left: 10px;
  margin-right: 10px;
}

button {
  border-style: none;
  min-height: 40px;
  font-size: 18px;
  background-color: #3a6019;
  margin-bottom: 20px;
  text-align: center;
  color: #b0eab5;
  border-radius: 8px;
}
</style>
