import Vue from 'vue'
import Router from 'vue-router'
import Artists from '@/components/Artists'
import Artist from '@/components/Artist'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Artists',
      component: Artists
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
    }
  ],
  mode: 'history'
})
