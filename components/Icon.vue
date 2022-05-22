<template>
  <img v-bind:src="`/fa/${name}.svg`">
</template>

<script>
export default {
  name: "Icon",
  props: ["name"]
}
</script>

<style scoped>
img {
  height: 20pt;
  width: 20pt;
}
</style>
