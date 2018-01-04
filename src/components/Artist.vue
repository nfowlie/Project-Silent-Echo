<template>
  <div id="content">
    <div id="current-artist">
      <div id="bio">
        <div id="play-button">
          <img id="artist-image" :src="current.imageSource">
          <!-- /static/img/the_lady_comes_first.5bdd6ef.jpg -->
          <!--<div id="play-pause-button"></div>-->
        </div>
        <div class="artist-name">{{ current.artistName }}</div>
          <div class="bio" v-html="current.biography"></div>
        </div>
        <input class="clipboard">
        <div id="track-list">
          <div id="albums">
            <div @click="select(album.id)" class="album" v-for="album in current.albums">{{ album.album }}</div>
          </div>
          <div class="track" v-for="track in current.tracks">
            <div class="track-row">
              <div class="full-duration" v-on:click="scrubAudio($event, track.id)">
                <div class="current-duration"></div>
              </div>
              <div v-on:click.capture="play(track.id, track.length)" class="track-info">
                <div class="track-artist">
                  <div class="track-name">{{ track.title }}</div>
                  <div class="track-artist-name">{{ track.album }}</div>
                </div>
                <div class="time-duration">{{ track.length }}</div>
                <audio :src="track.source" type="audio/mpeg"></audio>
              </div>
            </div>
            <div class="icons">
              <i class="fas fa-play-circle"></i>
              <i class="fas fa-pause-circle"></i>
            </div>
            <div class="icons" v-on:click="share(track)">
              <i class="fas fa-share-alt"></i>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      source: require('../assets/images/logo.png'),
      the_lady_comes_first: {
        artistName: 'The Lady Comes First',
        biography: 'The Lady Comes First is the collaborative effort of Adrian Emberley and Shoney Lamar, two singer songwriters who have been honing their craft since adolescence. Over the years, after hundreds of songs written each, their individual songwriting styles have emerged full-formed, fearless and distinct.<br/><br/> The two met in the murky Boston music scene in 2011 while each fronting their own successful indie rock bands. When those bands had run their course, Adrian and Shoney found themselves living together, already singing together at open mics and during each other’s sets. The idea to begin performing together seemed inevitable.<br/><br/> While listening to The Lady Comes First, one hears a combination of melodic styles from early blues and jazz singers and a clear love for modern rock and roll, citing influences such as Tom Waits, Talking Heads, Annie Lennox, Portishead, Muddy Waters, Nina Simone, and Howlin Wolf. Adrian and Shoney are multi-instrumentalists with an unwavering focus on songwriting. Their distinct voices somehow blend seamlessly, often confusing audiences as to whose voice is actually being heard. Though they perform live as a stripped-down drums and guitar duo with the occasional harmonica or ukulele thrown in the mix, the studio is where the true breadth of their musical vision shines, using any and all means of fleshing out what they feel each song needs to properly convey the intended emotion and thought.',
        songs: {
          featured: [
            {
              id: 0,
              title: 'Belly of the Beast',
              length: '3:45',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Belly of the Beast.mp3')
            },
            {
              id: 1,
              title: 'Stix and Stones',
              length: '3:18',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Stix and Stones.mp3')
            }
          ],
          delinore: [
            {
              id: 0,
              title: 'Belly of the Beast',
              length: '3:45',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Belly of the Beast.mp3')
            },
            {
              id: 1,
              title: 'Pterodactyl',
              length: '2:40',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Pterodactyl.mp3')
            },
            {
              id: 2,
              title: 'Stix and Stones',
              length: '3:18',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Stix and Stones.mp3')
            },
            {
              id: 3,
              title: 'Stix and Stones 1',
              length: '4:09',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Stix and Stones_1.mp3')
            },
            {
              id: 4,
              title: 'Thunderdome',
              length: '3:41',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Thunderdome.mp3')
            },
            {
              id: 5,
              title: 'Only Love',
              length: '3:31',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Only Love.mp3')
            },
            {
              id: 6,
              title: 'New Joint',
              length: '4:04',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/New Joint.mp3')
            },
            {
              id: 7,
              title: 'Sea Song',
              length: '3:11',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Sea Song.mp3')
            },
            {
              id: 8,
              title: 'Pissant',
              length: '2:46',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Pissant.mp3')
            },
            {
              id: 9,
              title: 'Lite On',
              length: '2:59',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Lite On.mp3')
            },
            {
              id: 10,
              title: 'Just Add Water',
              length: '3:23',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Just Add Water.mp3')
            }
          ]
        }
      },
      intercooler: {
        artistName: 'Intercooler',
        biography: 'After making music together for 20 years, Intercooler find themselves in top form, back in the studio with their original lineup and working with gold record producer Darek Mudge (Intercooler guitarist from 2006 – 2011) behind the desk.<br/><br/> The first three songs emerging from their current session, Everytime You Go, Surfin, and Hear The Wind showcase the band in their prime, pumping out their unique brand of infectious indie rock with more on the way.<br/><br/> Their list of critically acclaimed releases: Old School Is The New School,  Dance Of A Thousand Promises,  Forever or Whatever and Time To Let Go  delivered a string of radio friendly hits, receiving high rotation airplay on Australian national radio network Triple J.<br/><br/>Over its career, Intercooler has delivered a steady diet of guitar driven accessible rock that has you humming to yourself after just one listen while still having the depth and multi-layered structure to leave music lovers wanting to explore the songs further.<br/><br/>Intercooler’s music has been used in dozens of international synchronization applications in conjunction with CBS TV, Weinstein Brothers Productions, Sony TV, ABC TV, Lifetime Network, Match.com, Volvo, Billabong, Warner Home Entertainment amongst others.<br/><br/> Intercooler Are: <br/><br/>Phil Ballantyne - volcals guitar<br/><br/>Damon Cox - drums<br/><br/>Michael Caso - guitar<br/><br/>Joel Potter - bass',
        songs: {
          featured: [
            {
              id: 0,
              title: 'Everytime I Go',
              length: '3:04',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/Everytime I go.mp3')
            },
            {
              id: 1,
              title: 'See The Wind Go',
              length: '3:36',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/See The Wind Go.mp3')
            },
            {
              id: 2,
              title: 'Surfin',
              length: '3:17',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/Surfin.mp3')
            }
          ],
          surfin: [
            {
              id: 0,
              title: 'Everytime I Go',
              length: '3:04',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/Everytime I go.mp3')
            },
            {
              id: 1,
              title: 'See The Wind Go',
              length: '3:36',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/See The Wind Go.mp3')
            },
            {
              id: 2,
              title: 'Surfin',
              length: '3:17',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/Surfin.mp3')
            }
          ],
          intercooler: [
            {
              id: 0,
              title: 'All I want',
              length: '2:41',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/All I want.mp3')
            },
            {
              id: 1,
              title: 'better lock your goat away',
              length: '4:38',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/better lock your goat away.mp3')
            },
            {
              id: 2,
              title: 'I never wanted a dolly',
              length: '2:49',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/I never wanted a dolly.mp3')
            },
            {
              id: 3,
              title: 'wopperflux',
              length: '3:38',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/wopperflux.mp3')
            },
            {
              id: 4,
              title: 'dog shit feet',
              length: '3:52',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/dog ---- feet.mp3')
            },
            {
              id: 5,
              title: 'bored',
              length: '7:19',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/bored.mp3')
            },
            {
              id: 6,
              title: 'Hawaii',
              length: '3:35',
              album: 'Intercooler',
              source: require('../assets/music/Intercooler/Intercooler/Hawaii.mp3')
            }
          ]
        }
      },
      current: {
        id: null,
        artistName: null,
        biography: null,
        albums: {},
        tracks: {},
        imageSource: null
      }
    }
  },
  watch: {
    '$route' (to, from) {
      alert(to.params.artist)
    }
  },
  created () {
    // alert(this.$route.params.artist)
    this.fillData(this.$route.params.artist)
    this.select('featured')
  },
  methods: {
    share (track) {
      var clipboard = document.querySelector('.clipboard')
      clipboard.value = 'www.silentechopublishing.com/song/' + this.current.id + '/' + this.current.tracks[0].album.toLowerCase().replace("'", '') + '/' + track.title
      clipboard.select()
      document.execCommand('copy')
      // this.$router.replace('/song/' + this.current.id + '/' + this.current.tracks[0].album.toLowerCase().replace("'", '') + '/' + track.title)
      alert('Link to ' + track.title + ' by ' + track.artist + ' has been copied to your clipboard.')
    },
    play (a, trackDuration) {
      // Code to play song
      var playTimeTracker
      clearInterval(playTimeTracker)
      var playButton = document.querySelectorAll('.fa-play-circle')
      var pauseButton = document.querySelectorAll('.fa-pause-circle')
      var tracks = document.querySelectorAll('audio')
      var currentDurations = document.querySelectorAll('.current-duration')
      var timeDurations = document.querySelectorAll('.time-duration')
      for (var b = 0; b < tracks.length; b++) {
        playButton[b].style.display = 'block'
        pauseButton[b].style.display = 'none'
        if (b !== a) {
          tracks[b].pause()
        }
      }
      if (tracks[a].paused) {
        playButton[a].style.display = 'none'
        pauseButton[a].style.display = 'block'
        tracks[a].play()
        playTimeTracker = setInterval(function () {
          var remainingTime = parseInt(tracks[a].duration - tracks[a].currentTime, 10)
          var positionTime = (tracks[a].currentTime / tracks[a].duration) * 100
          var mins = Math.floor(remainingTime / 60, 10)
          var secs = remainingTime - mins * 60
          if (secs < 10) {
            secs = '0' + secs
          }
          timeDurations[a].textContent = mins + ':' + secs
          currentDurations[a].style.width = positionTime + '%'
        }, 1000)
      } else {
        // playButton[a].style.display = 'block'
        // pauseButton[a].style.display = 'none'
        tracks[a].pause()
      }
    },
    scrubAudio (event, id) {
      var tracks = document.querySelectorAll('.track-row')
      var skippingTrack = tracks[id]
      console.log(id)
      var percentage = ((event.clientX - skippingTrack.firstElementChild.offsetLeft) / skippingTrack.firstElementChild.clientWidth)
      skippingTrack.lastElementChild.lastElementChild.currentTime = percentage * skippingTrack.lastElementChild.lastElementChild.duration
      skippingTrack.firstElementChild.firstElementChild.style.width = ((event.clientX - skippingTrack.firstElementChild.offsetLeft) / skippingTrack.firstElementChild.clientWidth) * 100 + '%'

      var remainingTime = parseInt(skippingTrack.lastElementChild.lastElementChild.duration - skippingTrack.lastElementChild.lastElementChild.currentTime, 10)
        // positionTime = (skippingTrack.lastElementChild.lastElementChild.currentTime / skippingTrack.lastElementChild.lastElementChild.duration) * 100,
      var mins = Math.floor(remainingTime / 60, 10)
      var secs = remainingTime - mins * 60
      if (secs < 10) {
        secs = '0' + secs
      }

      skippingTrack.lastElementChild.children[1].textContent = mins + ':' + secs
    },
    fillData (artist) {
      this.current.id = artist
      this.current.artistName = this[artist].artistName
      this.current.biography = this[artist].biography
      this.current.imageSource = require('../assets/images/' + artist + '.png')

      for (var key in this[artist].songs) {
        // this.current.albums[key] = this[artist].songs[key][0].album
        if (key === 'featured') {
          this.current.albums[key] = {id: key, album: 'Featured'}
        } else {
          this.current.albums[key] = {id: key, album: this[artist].songs[key][0].album}
        }
        // // this.current.tracks[key] = {id: key, album: this[artist].songs[key]}
        // this.current.tracks.push({key: 32})
        // for (var innerkey in this[artist].songs[key]) {
        //   console.log(this[artist].songs[key][innerkey].title)
        //   this.current.tracks.key = 'e'
        //   this.current.tracks.key.push(this[artist].songs[key][innerkey].title)
        // }
      }
      console.log(this.current.albums)
      console.log(this.current.tracks)
    },
    select (album) {
      console.log(album)
      console.log(this.current.tracks[album])
      this.current.tracks = this[this.current.id].songs[album]
      console.log(this.current.tracks)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  background-color: #b7d2ff;
}
.track {
  flex-direction: row;
}
.track-row {
  width: 50vw;
  max-width: 695px;
  height: 60px;
  margin: 5px 0 0 75px;
}
.icons {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 0 0 8px;
}
.fa-pause-circle {
  display: none;
}
.clipboard {
  position: absolute;
  top: 400px;
  right: 100px;
  z-index: -1;
}
body {
  z-index: 1;
}
</style>