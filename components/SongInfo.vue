<template>
  <div class="album">
    <h2>The song was <i>{{ audio.title }}</i> by <i>{{ audio.artist }}</i></h2>
    <img height="250px" v-bind:src="audio.cover_url">
    <p>⏯ <a target="_blank" v-bind:href="audio.stream_link">Stream this song</a></p>
  </div>
</template>

<script>
export default {
  name: "SongInfo",
  props: ["audio"]
}
</script>

<style scoped>
.album {
  border-style: solid;
  border-color: #2666b9;
  min-height: 60px;
  background-color: #305380;
  margin-bottom: 20px;
  text-align: center;
  color: #b0d9ea;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  color: #b0d9ea;
}
</style>
