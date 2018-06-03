import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import Router from 'vue-router'
import Artists from '@/components/Artists'
import Artist from '@/components/Artist'
import Song from '@/components/Song'
import About from '@/components/About'
import Contact from '@/components/Contact'
import '@/fontawesome-all.min.js'
import '@/clipboard.min.js'

Vue.use(Router)
Vue.use(VueClipboard)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/artists',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/artist/:artist',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/song/:artist/:album/:song',
      name: 'Song',
      component: Song
    }
  ],
  mode: 'history',
  base: __dirname
})
