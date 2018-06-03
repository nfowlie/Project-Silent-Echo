<template>
  <div id="content">
    <div id="artists">
      <div class="artist">
        <router-link :to="{name: 'Artist', params: { artist: 'intercooler'}}">
          <div class="image-tint">
              <img src="../assets/images/intercooler.jpg">
          </div>
          <div>Intercooler</div>
        </router-link>
      </div>
      <div class="artist">
        <router-link :to="{name: 'Artist', params: { artist: 'the_lady_comes_first'}}">
          <div class="image-tint">
              <img src="../assets/images/the_lady_comes_first.jpg">
          </div>
          <div>The Lady Comes First</div>
        </router-link>
      </div>
      <div class="artist">
        <router-link :to="{name: 'Artist', params: { artist: 'mrdreem'}}">
          <div class="image-tint">
              <img src="../assets/images/mrdreem.jpg">
          </div>
          <div>Mr. Dreem</div>
        </router-link>
      </div>
      <div class="artist">
        <router-link :to="{name: 'Artist', params: { artist: 'crop_circles'}}">
          <div class="image-tint">
              <img src="../assets/images/crop_circles.jpg">
          </div>
          <div>Crop Circles</div>
        </router-link>
      </div>
      <div class="artist">
        <router-link :to="{name: 'Artist', params: { artist: 'the_people_people'}}">
          <div class="image-tint">
              <img src="../assets/images/the_people_people.jpg">
          </div>
          <div>The People People</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artists',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
