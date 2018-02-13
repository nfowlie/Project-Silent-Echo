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
        <div id="track-list">
          <div id="albums">
            <div @click="clickSelect(album.id, $event)" class="album" v-for="album in current.albums">{{ album.album }}</div>
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
            <div class="icons" v-on:click.capture="play(track.id, track.length)">
              <i class="fas fa-play-circle"></i>
              <i class="fas fa-pause-circle"></i>
            </div>
            <div class="icons" v-on:click="share(track, $event)">
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
        biography:
          'The Lady Comes First is the collaborative effort of Adrian Emberley and Shoney Lamar, two singer songwriters who have been honing their craft since adolescence. Over the years, after hundreds of songs written each, their individual songwriting styles have emerged full-formed, fearless and distinct.<br/><br/> The two met in the murky Boston music scene in 2011 while each fronting their own successful indie rock bands. When those bands had run their course, Adrian and Shoney found themselves living together, already singing together at open mics and during each other’s sets. The idea to begin performing together seemed inevitable.<br/><br/> While listening to The Lady Comes First, one hears a combination of melodic styles from early blues and jazz singers and a clear love for modern rock and roll, citing influences such as Tom Waits, Talking Heads, Annie Lennox, Portishead, Muddy Waters, Nina Simone, and Howlin Wolf. Adrian and Shoney are multi-instrumentalists with an unwavering focus on songwriting. Their distinct voices somehow blend seamlessly, often confusing audiences as to whose voice is actually being heard. Though they perform live as a stripped-down drums and guitar duo with the occasional harmonica or ukulele thrown in the mix, the studio is where the true breadth of their musical vision shines, using any and all means of fleshing out what they feel each song needs to properly convey the intended emotion and thought.',
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
              title: 'Only Love',
              length: '3:31',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Only Love.mp3')
            },
            {
              id: 2,
              title: 'Lite On',
              length: '2:59',
              album: "d'elinore",
              source: require('../assets/music/The Lady Comes First/Lite On.mp3')
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
        biography:
          'After making music together for 20 years, Intercooler find themselves in top form, back in the studio with their original lineup and working with gold record producer Darek Mudge (Intercooler guitarist from 2006 – 2011) behind the desk.<br/><br/>The first three songs emerging from their current session, <span class="bio-emphasis song">Everytime You Go</span>, <span class="bio-emphasis song">Surfin</span>, and <span class="bio-emphasis song">Hear The Wind</span> showcase the band in their prime, pumping out their unique brand of infectious indie rock with more on the way.<br/><br/>Their list of critically acclaimed releases: <span class="bio-emphasis release">Old School Is The New School</span>, <span class="bio-emphasis release">Dance Of A Thousand Promises</span>, <span class="bio-emphasis release">Forever or Whatever</span> and <span class="bio-emphasis release">Time To Let Go</span> delivered a string of radio friendly hits, receiving high rotation airplay on Australian national radio network Triple J and winning over fans in Australia and abroad<br/><br/>Throughout their career, Intercooler have delivered a steady diet of guitar driven rock that has you instantly humming to yourself, while still possessing the depth and multi-layered structure to reward music lovers with each listen.<br/><br/>Intercooler’s music has been used in dozens of international synchronization applications in conjunction with CBS TV, Sony TV, ABC TV, Lifetime Network, Match.com, Volvo, Billabong, Weinstein Brothers Productions, Warner Home Entertainment amongst others.<br/><br/>Intercooler Are:<br/><br/>Phil Ballantyne- vocals guitar<br/><br/>Damon Cox – drums<br/><br/>Michael Caso – guitar<br/><br/>Joel Potter – bass',
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
              title: 'Surfin',
              length: '3:17',
              album: 'Surfin',
              source: require('../assets/music/Intercooler/Surfin/Surfin.mp3')
            },
            {
              id: 2,
              title: 'Goodness of the Girl',
              length: '3:44',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Goodness of the Girl.mp3')
            },
            {
              id: 3,
              title: 'Crimson Cracker',
              length: '2:08',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Crimson Cracker.mp3')
            },
            {
              id: 4,
              title: 'Cream Puff',
              length: '3:15',
              album: 'Dance of a Thousand Promises',
              source: require('../assets/music/Intercooler/Dance of a Thousand Promises/Cream Puff.mp3')
            },
            {
              id: 5,
              title: 'Sugarplum',
              length: '2:44',
              album: 'Dance of a Thousand Promises',
              source: require('../assets/music/Intercooler/Dance of a Thousand Promises/Sugarplum.mp3')
            },
            {
              id: 6,
              title: 'Wasted My Day',
              length: '3:30',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Wasted My Day.mp3')
            },
            {
              id: 7,
              title: 'Move From My Way',
              length: '2:44',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Move From My Way.mp3')
            },
            {
              id: 8,
              title: 'Fly Me',
              length: '2:53',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Fly Me.mp3')
            },
            {
              id: 9,
              title: 'Ready',
              length: '3:54',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Ready.mp3')
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
              title: 'See The Wind',
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
          oldschoolisthenewschool: [
            {
              id: 0,
              title: 'Goodness of the Girl',
              length: '3:44',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Goodness of the Girl.mp3')
            },
            {
              id: 1,
              title: 'Tea Ball',
              length: '5:05',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Tea Ball.mp3')
            },
            {
              id: 2,
              title: 'Emo',
              length: '3:52',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Emo.mp3')
            },
            {
              id: 3,
              title: 'For Said',
              length: '5:05',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/For Said.mp3')
            },
            {
              id: 4,
              title: 'Good Friend',
              length: '3:13',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Good Friend.mp3')
            },
            {
              id: 5,
              title: "It's Like a Girl",
              length: '2:49',
              album: 'Old School Is the New School',
              source: require("../assets/music/Intercooler/Old School Is the New School/It's Like a Girl.mp3")
            },
            {
              id: 6,
              title: 'Crimson Cracker',
              length: '2:08',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Crimson Cracker.mp3')
            },
            {
              id: 7,
              title: 'Country',
              length: '2:58',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Country.mp3')
            },
            {
              id: 8,
              title: 'Leaflet',
              length: '3:02',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Leaflet.mp3')
            },
            {
              id: 9,
              title: 'Delicious',
              length: '3:50',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Delicious.mp3')
            },
            {
              id: 10,
              title: 'Timothy Tucker Part II',
              length: '4:02',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Timothy Tucker Part II.mp3')
            },
            {
              id: 11,
              title: 'Daniel and the Machine',
              length: '3:45',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Daniel and the Machine.mp3')
            },
            {
              id: 12,
              title: "If You'd Seen",
              length: '4:43',
              album: 'Old School Is the New School',
              source: require("../assets/music/Intercooler/Old School Is the New School/If You'd Seen.mp3")
            },
            {
              id: 13,
              title: 'Lovejoy',
              length: '5:08',
              album: 'Old School Is the New School',
              source: require('../assets/music/Intercooler/Old School Is the New School/Lovejoy.mp3')
            }
          ],
          danceofathousandpromises: [
            {
              id: 0,
              title: 'Cream Puff',
              length: '3:15',
              album: 'Dance of a Thousand Promises',
              source: require('../assets/music/Intercooler/Dance of a Thousand Promises/Cream Puff.mp3')
            },
            {
              id: 1,
              title: 'If I Try',
              length: '4:23',
              album: 'Dance of a Thousand Promises',
              source: require('../assets/music/Intercooler/Dance of a Thousand Promises/If I Try.mp3')
            },
            {
              id: 2,
              title: "Lovin' and Leavin'",
              length: '3:51',
              album: 'Dance of a Thousand Promises',
              source: require("../assets/music/Intercooler/Dance of a Thousand Promises/Lovin' and Leavin'.mp3")
            },
            {
              id: 3,
              title: 'Sugarplum',
              length: '2:44',
              album: 'Dance of a Thousand Promises',
              source: require('../assets/music/Intercooler/Dance of a Thousand Promises/Sugarplum.mp3')
            },
            {
              id: 4,
              title: "You're Not Gonna Hurt Us Again",
              length: '5:38',
              album: 'Dance of a Thousand Promises',
              source: require("../assets/music/Intercooler/Dance of a Thousand Promises/You're Not Gonna Hurt Us Again.mp3")
            }
          ],
          foreverorwhatever: [
            {
              id: 0,
              title: 'Craving Others',
              length: '3:38',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Carving Others.mp3')
            },
            {
              id: 1,
              title: 'Wasted My Day',
              length: '3:30',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Wasted My Day.mp3')
            },
            {
              id: 2,
              title: 'Move From My Way',
              length: '2:44',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Move From My Way.mp3')
            },
            {
              id: 3,
              title: 'All Coming Back To Me',
              length: '3:13',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/All Coming Back To Me.mp3')
            },
            {
              id: 4,
              title: 'Destiny',
              length: '5:48',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Destiny.mp3')
            },
            {
              id: 5,
              title: 'Sail This Into Me',
              length: '2:56',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Sail This Into Me.mp3')
            },
            {
              id: 6,
              title: 'Hold Me Again',
              length: '3:01',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Hold Me Again.mp3')
            },
            {
              id: 7,
              title: 'Come Back Down',
              length: '6:06',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Come Back Down.mp3')
            },
            {
              id: 8,
              title: 'Futures Created',
              length: '4:10',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Futures Created.mp3')
            },
            {
              id: 9,
              title: 'Pop Clothes',
              length: '3:07',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Pop Clothes.mp3')
            },
            {
              id: 10,
              title: 'Situations',
              length: '3:43',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Situations.mp3')
            },
            {
              id: 11,
              title: 'Navigate This',
              length: '3:10',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Navigate This.mp3')
            },
            {
              id: 12,
              title: 'My Problem',
              length: '3:40',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/My Problem.mp3')
            },
            {
              id: 13,
              title: 'Ok Girl',
              length: '5:43',
              album: 'Forever or Whatever',
              source: require('../assets/music/Intercooler/Forever or Whatever/Ok Girl.mp3')
            }
          ],
          timetoletgo: [
            {
              id: 0,
              title: 'Good Morning',
              length: '5:22',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Good Morning.mp3')
            },
            {
              id: 1,
              title: 'Ready',
              length: '3:54',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Ready.mp3')
            },
            {
              id: 2,
              title: 'Time To Let Go',
              length: '3:57',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Time To Let Go.mp3')
            },
            {
              id: 3,
              title: 'War + Peace',
              length: '4:34',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/War + Peace.mp3')
            },
            {
              id: 4,
              title: "Packin' for Paris",
              length: '2:03',
              album: 'Time To Let Go',
              source: require("../assets/music/Intercooler/Time To Let Go/Packin' for Paris.mp3")
            },
            {
              id: 5,
              title: 'Trumpet Song',
              length: '2:58',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Trumpet Song.mp3')
            },
            {
              id: 6,
              title: 'Easy',
              length: '4:03',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Easy.mp3')
            },
            {
              id: 7,
              title: 'Fly Me',
              length: '2:53',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Fly Me.mp3')
            },
            {
              id: 8,
              title: 'It Happened in May',
              length: '4:16',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/It Happened in May.mp3')
            },
            {
              id: 9,
              title: 'Swimming Clouds',
              length: '3:53',
              album: 'Time To Let Go',
              source: require('../assets/music/Intercooler/Time To Let Go/Swimming Clouds.mp3')
            },
            {
              id: 10,
              title: "I Don't Wanna",
              length: '5:18',
              album: 'Time To Let Go',
              source: require("../assets/music/Intercooler/Time To Let Go/I Don't Wanna.mp3")
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
    $route (to, from) {
      alert(to.params.artist)
    }
  },
  created () {
    // alert(this.$route.params.artist)
    this.fillData(this.$route.params.artist)
    this.select('featured')
    new Clipboard('.icons')
  },
  methods: {
    share (track, event) {
      var value = 'www.silentechopublishing.com/song/' +
        this.current.id +
        '/' +
        track.album.toLowerCase().replace("'", '') +
        '/' +
        track.title
      event.target.parentNode.setAttribute('data-clipboard-text', value)
      var modal = document.querySelector('.modal')
      modal.children[1].textContent = track.title
      modal.children[3].textContent = this.current.artistName
      modal.style.opacity = 1
      setTimeout(function () {
        modal.style.opacity = 0
      }, 3000)
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
          var remainingTime = parseInt(
            tracks[a].duration - tracks[a].currentTime,
            10
          )
          var positionTime = tracks[a].currentTime / tracks[a].duration * 100
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
      var percentage =
        (event.clientX - skippingTrack.firstElementChild.offsetLeft) /
        skippingTrack.firstElementChild.clientWidth
      skippingTrack.lastElementChild.lastElementChild.currentTime =
        percentage * skippingTrack.lastElementChild.lastElementChild.duration
      skippingTrack.firstElementChild.firstElementChild.style.width =
        (event.clientX - skippingTrack.firstElementChild.offsetLeft) /
          skippingTrack.firstElementChild.clientWidth *
          100 +
        '%'

      var remainingTime = parseInt(
        skippingTrack.lastElementChild.lastElementChild.duration -
          skippingTrack.lastElementChild.lastElementChild.currentTime,
        10
      )
      // positionTime = (skippingTrack.lastElementChild.lastElementChild.currentTime / skippingTrack.lastElementChild.lastElementChild.duration) * 100,
      var mins = Math.floor(remainingTime / 60, 10)
      var secs = remainingTime - mins * 60
      if (secs < 10) {
        secs = '0' + secs
      }

      skippingTrack.lastElementChild.children[1].textContent =
        mins + ':' + secs
    },
    fillData (artist) {
      this.current.id = artist
      this.current.artistName = this[artist].artistName
      this.current.biography = this[artist].biography
      this.current.imageSource = require('../assets/images/' + artist + '.jpg')

      for (var key in this[artist].songs) {
        // this.current.albums[key] = this[artist].songs[key][0].album
        if (key === 'featured') {
          this.current.albums[key] = { id: key, album: 'Featured' }
        } else {
          this.current.albums[key] = {
            id: key,
            album: this[artist].songs[key][0].album
          }
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
      console.log('line 1 ' + album)
      console.log('line 2 ' + this.current.tracks[album])
      this.current.tracks = this[this.current.id].songs[album]
      this.current.imageSource = require('../assets/images/' + this.current.id + '/' + album + '.jpg')
      console.log('Line 3 ' + this.current.tracks)
    },
    clickSelect (album, event) {
      if (document.querySelector('.album.active')) {
        document.querySelector('.album.active').classList.remove('active')
      } else {
        document.querySelector('.album:first-child').style.fontWeight = 'normal'
        document.querySelector('.album:first-child').style.color = '#555555'
      }
      this.current.tracks = this[this.current.id].songs[album]
      this.current.imageSource = require('../assets/images/' + this.current.id + '/' + album + '.jpg')
      event.target.classList.add('active')
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
  position: fixed;
  top: 50vh;
  left: 50vw;
  width:0;
  z-index: -1;
}
body {
  z-index: 1;
}
</style>