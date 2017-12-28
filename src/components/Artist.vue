<template>
  <div id="content">
    <div id="current-artist">
      <div id="bio">
        <div id="play-button">
          <img id="artist-image" src="../assets/images/the_lady_comes_first.jpg">
          <!--<div id="play-pause-button"></div>-->
        </div>
        <div class="artist-name">{{ current.artistName }}</div>
          <div class="bio">{{ current.biography }}</div>
        </div>
        <div id="track-list">
          <div id="albums">
            <div @click="select(album.id)" class="album" v-for="album in current.albums">{{ album.album }}</div>
          </div>
          <div class="track" v-for="track in current.tracks">
            <div class="full-duration">
              <div class="current-duration"></div>
            </div>
            <div @click="play(track.title)" class="track-info">
              <div class="track-artist">
                <div class="track-name">{{ track.title }}</div>
                <div class="track-artist-name">{{ track.album }}</div>
              </div>
              <div class="time-duration">{{ track.length }}</div>
              <audio src=""></audio>
            </div>
          </div>
        </div>
        <!-- <div id="track-list" v-for="album in the_lady_comes_first.songs">{{ album.title }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      the_lady_comes_first: {
        artistName: 'The Lady Comes First',
        biography: 'The Lady Comes First is the collaborative effort of Adrian Emberley and Shoney Lamar, two singer songwriters who have been honing their craft since adolescence. Over the years, after hundreds of songs written each, their individual songwriting styles have emerged full-formed, fearless and distinct.\n\n The two met in the murky Boston music scene in 2011 while each fronting their own successful indie rock bands. When those bands had run their course, Adrian and Shoney found themselves living together, already singing together at open mics and during each other’s sets. The idea to begin performing together seemed inevitable.\n\n While listening to The Lady Comes First, one hears a combination of melodic styles from early blues and jazz singers and a clear love for modern rock and roll, citing influences such as Tom Waits, Talking Heads, Annie Lennox, Portishead, Muddy Waters, Nina Simone, and Howlin Wolf. Adrian and Shoney are multi-instrumentalists with an unwavering focus on songwriting. Their distinct voices somehow blend seamlessly, often confusing audiences as to whose voice is actually being heard. Though they perform live as a stripped-down drums and guitar duo with the occasional harmonica or ukulele thrown in the mix, the studio is where the true breadth of their musical vision shines, using any and all means of fleshing out what they feel each song needs to properly convey the intended emotion and thought.',
        songs: {
          featured: [
            {
              title: 'eee',
              length: '3:3',
              album: 'Featured'
            },
            {
              title: 'eee',
              length: '3:3',
              album: 'Featured'
            }
          ],
          delinore: [
            {
              title: 'Belly of the Beast',
              length: '3:45',
              album: "d'elinore"
            },
            {
              title: 'Pterodactyl',
              length: '2:40',
              album: "d'elinore"
            },
            {
              title: 'Stix and Stones',
              length: '3:18',
              album: "d'elinore"
            },
            {
              title: 'Stix and Stones 1',
              length: '4:09',
              album: "d'elinore"
            },
            {
              title: 'Thunderdome',
              length: '3:41',
              album: "d'elinore"
            },
            {
              title: 'Only Love',
              length: '3:31',
              album: "d'elinore"
            },
            {
              title: 'New Joint',
              length: '4:04',
              album: "d'elinore"
            },
            {
              title: 'Sea Song',
              length: '3:11',
              album: "d'elinore"
            },
            {
              title: 'Pissant',
              length: '2:46',
              album: "d'elinore"
            },
            {
              title: 'Lite On',
              length: '2:59',
              album: "d'elinore"
            },
            {
              title: 'Just Add Water',
              length: '3:23',
              album: "d'elinore"
            }
          ]
        }
      },
      current: {
        id: null,
        artistName: null,
        biography: null,
        albums: {},
        tracks: {}
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
    play (track) {
      // Code to play song
      alert(track)
    },
    fillData (artist) {
      this.current.id = artist
      this.current.artistName = this[artist].artistName
      this.current.biography = this[artist].biography

      for (var key in this[artist].songs) {
        // this.current.albums[key] = this[artist].songs[key][0].album
        this.current.albums[key] = {id: key, album: this[artist].songs[key][0].album}
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
</style>