<template>
  <div class="game">
    <p v-if="!audio">There's no Tokle today!</p>
    <div v-if="!!audio">
      <div class="hints">
        <HintBlock v-bind:block="1" />
        <HintBlock v-bind:block="2" />
        <HintBlock v-bind:block="3" />
        <HintBlock v-bind:block="4" />
      </div>
      <div class="buttons" v-show="!selectionTime && !correct && !ranOut">
        <button v-if="skips === 0" class="playButton" v-on:click="play()" v-bind:disabled="playing">Start playing</button>
        <button v-if="skips !== 0" class="playButton" v-on:click="play()" v-bind:disabled="playing">Resume song</button>
      </div>
      <div class="covers" v-if="selectionTime">
          <a v-for="cover in randomCovers" v-on:click="select(cover)"><img class="cover" v-bind:src="cover" height="100px" width="100px"></a>
      </div>
      <Correct v-if="correct || ranOut" v-bind:audio="this.audio" />
      <SongInfo v-if="correct || ranOut" v-bind:audio="audio" />
      <hr>
      <div class="socials">
        <p>Follow us!</p>
        <a href="https://tiktok.com/@tokle.app" class="social-icon"><Icon name="tiktok-brands"></Icon></a>
<!--        TODO: make discord server -->
<!--        <a class="social-icon"><Icon name="discord-brands"></Icon></a>-->
      </div>
    </div>
  </div>
</template>

<style>
.social-icon {
  margin-right: 5px;
  margin-left: 5px;
  padding: 20px 10px 5px;
  border-radius: 5px;
  background-color: #1a1a1a;
}
.socials {
  text-align: center;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #1a1a1a;
}
.game {
  color: white;
}
.hints {
  padding: 20px;
}
.buttons {
  text-align: center;
  width: 100%;
}
.playButton {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  float: none;
  border-radius: 5px;
}
.playButton:disabled {
  background-color: #153317;
  color: #676767;
}
.covers {
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
.cover {
  margin-left: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>

<script>
import { getAudio, getRandomCovers } from "~/scripts/audios";
import shuffle from "~/scripts/shuffle";
import {Howl, Howler} from 'howler';
let player;

export default {
  name: "IndexPage",
  layout: "base",
  data() { return {
      audio: null,
      playing: false,
      selectionTime: false,
      randomCovers: [],
    }
  },
  fetch() {
    this.audio = getAudio()
    player = new Howl({
      src: this.audio.sound_url,
      html5: true,
      preload: true,
      onplay: () => {
        setTimeout(function () {
          if (!(this.correct || this.ranOut)) {
            this.playing = false
            player.pause()
            this.createSelection()
          }

        }.bind(this), 5000);
      }
    });
    this.randomCovers = getRandomCovers(this.audio.cover_url)
  },
  methods: {
    play() {
      player.play()
      this.playing = true
    },
    createSelection() {
      this.randomCovers = shuffle(this.randomCovers)
      this.selectionTime = true
    },
    select(cover) {
      this.selectionTime = false
      if (cover === this.audio.cover_url) {
        this.$store.commit('correct')
        player.play()
      } else if (this.skips === 3) {
        this.$store.commit('ranOut')
        player.play()
      }

      this.$store.commit('skip')
    }
  },
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
  }
}
</script>
