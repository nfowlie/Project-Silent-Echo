<template>
  <div id="app">
    <div id="logo">
      <router-link :to="{path: '/'}"><img src="./assets/images/echo.png"></router-link>
    </div>
    <div class="modal">
      <div>Link to: </div>
      <div class="modal-song"></div>
      <div>by: </div>
      <div class="modal-artist"></div>
      <div>has been copied to your clipboard.</div>
    </div>
    <div id="navbar">
        <router-link :to="{path: '/artists'}">
            <div class="nav-option active">ARTISTS</div>
        </router-link>
        <router-link :to="{path: '/about'}">
            <div class="nav-option">ABOUT</div>
        </router-link>
        <router-link :to="{path: '/contact'}">
            <div class="nav-option">CONTACT</div>
        </router-link>
    </div>
    <router-view/>
    <div id="footer"></div>
  </div>
</template>
<script>
/* eslint-disable */
FontAwesomeConfig = { searchPseudoElements: true }
</script>
<script defer src='./fontawesome-all.min.js'></script>
<script>
/* eslint-disable */
FontAwesomeConfig = { searchPseudoElements: true }
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
@font-face {
  font-family: "Roboto Condensed Regular";
  src: url("./assets/fonts/RobotoCondensed-Regular.ttf") format("truetype");
}
* {
  margin: 0;
}
#app {
  font-family: "Roboto Condensed Regular", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
a:link,
a:visited {
  text-decoration: none;
  color: #000000;
}

body {
  /*background-color: #abb9be;*/
  background-color: #b7d2ff;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#logo {
  margin-top: 20px;
  height: 216px;
  width: 90vw;
  max-width: 1200px;
  display: flex;
  /* justify-content: flex-end; */
  justify-content: center;
  background-size: cover;
  /*background-color: blue;*/
}

#logo img {
  cursor: pointer;
  height: 216px;
}

#navbar {
  height: 100px;
  width: 90vw;
  max-width: 1200px;
  /*background-color: red;*/
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed #000000;
}

#footer {
  margin: 50px 0 50px 0;
  width: 90vw;
  max-width: 1200px;
  border-bottom: 1px dashed #000000;
}

.nav-option {
  /*width: 33vw;*/
  font-size: 26px;
  font-family: "Roboto Condensed Regular", sans-serif;
}

/* .nav-option.active {
    color: #d6002a;
} */

.nav-option:hover {
  color: #333333;
  cursor: pointer;
}

#content {
  width: 90vw;
  max-width: 1200px;
}

#artists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#albums {
  margin: 0 0 20px 75px;
  display: flex;
  flex-direction: row;
  position: relative;
}

/* #albums::before {
  display: none;
  font-family: "Font Awesome 5 Solid";
  content: "\f351";
  position: absolute;
}
#albums::after {
  display: none;
  font-family: "Font Awesome 5 Solid";
  content: "\f352";
  position: absolute;
} */

.album {
  font-size: 22px;
}

.album:not(:last-child) {
  margin-right: 20px;
}

.album:not(:hover) {
  color: #555555;
}

.album:first-child, .album.active {
  font-weight: bold;
  color: #000;
}

.album:first-child.active{
  font-weight: bold!important;
  color: #000!important;
}

.album:hover {
  color: #333333;
  cursor: pointer;
}

.artist {
  margin: 42px 18px 0 18px;
  font-family: sans-serif;
  text-align: center;
  cursor: pointer;
}

.artist:nth-child(6n + 1) {
  margin-left: 0;
  margin-right: 18px;
}

.artist:nth-child(6n) {
  margin-right: 0;
  margin-left: 18px;
}

.artist img {
  width: 170px;
  height: 170px;
}

.artist div:last-child {
  position: relative;
  top: 10px;
}

.artist:hover > .image-tint:before {
  background: rgba(0, 0, 0, 0.5);
}

.image-tint {
  position: relative;
}

.image-tint:before {
  transition: all 0.3s linear;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.image-tint:hover:before {
  background: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 1335px) {
  .artist {
    margin: 42px 1.34vw 0 1.34vw;
    font-family: sans-serif;
    text-align: center;
    cursor: pointer;
  }
  .artist:nth-child(6n + 1) {
    margin-left: 0;
    margin-right: 1.34vw;
  }
  .artist:nth-child(6n) {
    margin-right: 0;
    margin-left: 1.34vw;
  }
  .artist img {
    width: 12.734vw;
    height: 12.734vw;
  }
}

#contact {
  margin: 42px 0 0 0;
  font-family: "Roboto Condensed Regular";
  font-size: 20px;
}

#about {
  display: flex;
  flex-direction: row;
  font-family: "Roboto Condensed Regular";
  margin: 42px 0 0 0;
}

.about-text {
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1200px;
}

.about-header {
  font-size: 26px;
  margin-bottom: 15px;
}

.about-text-content {
  font-size: 20px;
}

/*Current Artist*/

#current-artist {
  display: flex;
  flex-direction: row;
  font-family: "Roboto Condensed Regular";
  font-size: 16px;
  margin: 42px 0 0 0;
}

.artist-name {
  font-size: 30px;
  margin: 20px 0;
}

.bio {
  font-size: 15px;
}

#current-artist #bio,
#bio img {
  width: 30vw;
  max-width: 400px;
}

#play-button {
  height: auto;
}

audio {
}

#track-list {
  width: 59.5vw;
  display: flex;
  flex-direction: column;
  /*align-items: center;
    justify-content: center;*/
}

.track {
  width: 59.5vw;
  max-width: 800px;
  height: 60px;
  /*height: 7.407vh;*/
  margin: 5px 0 0 0;
  display: flex;
  flex-direction: column;
}

.full-duration {
  width: 100%;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.2);
}

.current-duration {
  width: 0;
  height: 3px;
  background-color: rgba(0, 0, 0, 1);
  transition: 300ms ease;
}

.track:first-child {
  margin-top: 0;
}

.track-info {
  margin-top: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.track-artist {
  display: flex;
  flex-direction: column;
}

.track-name,
.time-duration {
  font-size: 18px;
}

.track-artist-name {
  font-size: 15px;
}

@media screen and (max-width: 768px) {
}

#play-pause-button {
  background-color: black;
  height: 20px;
  width: 29px;
}

.featured {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}

.track-row,
.full-duration,
.icons {
  cursor: pointer;
}
.modal {
  width: 300px;
  height: 150px;
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: rgba(71, 201, 162, 0.9);
  border-radius: 10px;
  transition: 1.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  opacity: 0;
}

.modal-song,
.modal-artist {
  font-weight: bold;
  font-size: 25px;
}

.bio-emphasis{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
