import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import CommunityView from '@/views/CommunityView.vue'
import DiscussionView from '@/views/DiscussionView.vue'
import ThreadDetailView from '@/views/ThreadDetailView.vue'
import ProfileView from '@/views/ProfileView.vue'
import AuthView from '@/views/AuthView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Beranda — RuangAksara' }
  },
  {
    path: '/jelajah',
    name: 'Explore',
    component: ExploreView,
    meta: { title: 'Jelajah Buku & Tulisan — RuangAksara' }
  },
  {
    path: '/artikel/:id',
    name: 'ArticleDetail',
    component: ArticleDetailView,
    meta: { title: 'Detail Artikel — RuangAksara' }
  },
  {
    path: '/komunitas',
    name: 'Community',
    component: CommunityView,
    meta: { title: 'Klub Buku & Komunitas — RuangAksara' }
  },
  {
    path: '/diskusi',
    name: 'Discussion',
    component: DiscussionView,
    meta: { title: 'Forum Diskusi — RuangAksara' }
  },
  {
    path: '/diskusi/:id',
    name: 'ThreadDetail',
    component: ThreadDetailView,
    meta: { title: 'Detail Percakapan — RuangAksara' }
  },
  {
    path: '/profil',
    name: 'Profile',
    component: ProfileView,
    meta: { title: 'Profil & Rak Buku — RuangAksara' }
  },
  {
    path: '/masuk',
    name: 'Auth',
    component: AuthView,
    meta: { title: 'Masuk / Daftar — RuangAksara' }
  },
  {
    // Fallback redirect to Home
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
