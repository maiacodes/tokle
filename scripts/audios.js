let days = {
  "21-5-2022": {
    sound_url: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/6a790bec1bf640c185753440ca131a7e",
    cover_url: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/b14b44e661ac4760918e327255dad09f~c5_200x200.jpeg",
    title: "Love You So",
    artist: "The King Khan & BBQ Show",
    stream_link: "https://www.tiktok.com/music/Love-You-So-6728562975734515713",
  },
  "22-5-2022": {
    sound_url: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/986dfec9a96747239819231f7dc93931",
    cover_url: "https://cloudinary-cdn.ffm.to/s--FjlIXNLg--/f_jpg/https%3A%2F%2Fimagestore.ffm.to%2Flink%2Fe2d127fc115a83ae1dcd596008d1f87e.jpeg",
    title: "Sunroof",
    artist: "Nicky Youre",
    stream_link: "https://ffm.to/nickyyouresunroof"
  },
  "23-5-2022": {
    sound_url: "https://sf77-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/fac568fa8519465fbc024bcb7781bd40",
    cover_url: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/3e3e597e59c246c7bad5b2064a414db9~c5_200x200.jpeg",
    title: "KAWAII",
    artist: "Tatarka",
    stream_link: "https://www.tiktok.com/music/KAWAII-6887856287699175426"
  },
  "24-5-2022": {
    sound_url: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/76620b22fa6148fc8a0f236baff8f4b8",
    cover_url: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/7f724d3a33ca4a239b67b2f7fece6158~c5_200x200.jpeg",
    title: "Forever",
    artist: "Labrinth",
    stream_link: "https://www.tiktok.com/music/Forever-6740248251825391617"
  },
  "25-5-2022": {
    sound_url: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/f8bdb47a5e734d45bf680a65ece96211",
    cover_url: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/cb7c21683b60477daf3fb5b6e08a1bf8~c5_200x200.jpeg",
    title: "Banana",
    artist: "Conkarah",
    stream_link: "https://www.tiktok.com/music/Banana-feat-Shaggy-6788784989656926981"
  },
  "26-5-2022": {
    sound_url: "",
    cover_url: "https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/204b9fd903a14cd2b6f97ebc835bed64~c5_200x200.jpeg",
    title: "You",
    artist: "Petit Biscuit",
    stream_link: "https://sf16-ies-music-va.tiktokcdn.com/obj/tos-useast2a-ve-2774/2b9808b7bc8b49c9981a99f4581a4476"
  }
}

let template = {
  sound_url: "",
  cover_url: "",
  title: "",
  artist: "",
  stream_link: ""
}

export function getRandomCovers(correct) {
  let songs = days
  let covers = []

  console.log(songs)
  for (let step = 0; step < 6; step++) {
    let cover = randomProperty(songs).cover_url

    let goodSongs = {}
    for (let key in songs) {
      if (songs[key].cover_url !== cover) {
        goodSongs[key] = songs[key]
      }
    }
    songs = goodSongs

    covers.push(cover)
  }

  if (!covers.includes(correct)) {
    covers[0] = correct
  }

  return covers
}

export function getAudio() {
  // To set two dates to two variables
  let todayDate = getTextDate(new Date())
  console.log(todayDate)
  return days[todayDate]
}

export function getTextDate(date) {
  return `${date.getUTCDate()}-${date.getUTCMonth() + 1}-${date.getUTCFullYear()}`
}

function randomProperty(obj) {
  let keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
}
