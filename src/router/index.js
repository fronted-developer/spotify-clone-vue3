import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homepage', component: HomePage},
        {path: '/chillmix', name: 'chillmix', component: () => import("@/pages/ChillMixPage.vue")},
        {path: '/MovieMusic', name: 'movieMusic', component: () => import("@/pages/MyLifeIsMovie.vue")},
        {path: '/BeatlesPage', name: 'beatles', component: () => import("@/pages/BeatlesPage.vue")},
        {path: '/SearchPage', name: 'search', component: () => import("@/pages/SearchPage.vue")},
        {path: '/album/:id', name: 'album', component: () => import("@/pages/AlbumPage.vue")},
        {path: '/playlist/:id', name: 'playlist', component: () => import("@/pages/PlaylistPage.vue")},
    ],
})



export default router