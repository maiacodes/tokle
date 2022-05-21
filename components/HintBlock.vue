<template>
  <div class="block">
    <p v-if="skips > block-1 && !(skips === block && correct)">🟥 Incorrect</p>
    <p v-if="skips === block && correct">🟩 Correct</p>
  </div>
</template>

<script>
export default {
  name: "HintBlock",
  props: {
    block: Number
  },
  computed: {
    skips() {
      return this.$store.state.skips
    },
    correct() {
      return this.$store.state.correctSkip
    }
  }
}
</script>

<style scoped>
.block {
  border-style: solid;
  border-color: #382a2a;
  min-height: 60px;
  background-color: #363636;
  margin-bottom: 20px;
  text-align: center;
  color: #8ba79c;
}
</style>
