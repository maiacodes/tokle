<template>
  <div id="modal" class="modal" v-show="modalState !== 'none'" v-on:click="$store.commit('setModal', 'none')">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" v-on:click="$store.commit('setModal', 'none')">&times;</span>
      <div v-show="modalState === 'info'">
        Tokle is a game inspired by <a target="_blank" href="https://www.heardle.app">Heardle</a> and <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>.
        <br><br>
        The aim of the game? Listen to the audio and guess the cover art of the popular TikTok audio. Skipped or incorrect attempts unlock more of the audio, answer in as few tries as possible and share your score!
        <br><br>
        <u>Copyright notice</u><br>
        Audios and cover art played/displayed here are short, low quality, 'previews' used for solely to illustrate the song in question. Audios and art are owned by their respective copyright owners, not us. We do not host the content in question ourselves.
        <br><br>
        <u>Legal contact</u><br>
        For all legal contact, please email <code>tokle@maia.codes</code>
      </div>
      <div v-show="modalState === 'donate'">
        This project is by <a href="https://maia.codes" target="_blank">maia.codes</a>! I make fun web toys.
        <br><br>
        Oh and by the way, this project is completely <a href="https://github.com/maiacodes/tokle">open source</a> so anyone can see the code!
        <br><br>
        But, If you really like Tokle, then you can <a target="_blank" href="https://ko-fi.com/maiacodes">buy me a coffee!</a>
      </div>
      <div v-if="modalState === 'copied'">
        Copied to your clipboard!
      </div>
      <div v-if="modalState === 'shareError'">
        Your browser isn't letting us bring up the sharing menu, so instead, try copying your results to the clipboard!
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    modalState(){
      return this.$store.state.modal;
    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content a {
  color: white;
}
.modal-content {
  color: white;
  background-color: #3a3a3a;
  margin: auto;
  padding: 20px;
  border: 1px solid #2c2c2c;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
