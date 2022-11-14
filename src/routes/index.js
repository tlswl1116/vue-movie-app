import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pageHome'
import Movie from './pageMovie'
import About from './pageAbout'
import NotFound from './NotFound'

export default createRouter ({
    //Hash
    //https://google.com/#/search
    history: createWebHashHistory(),
    scrollBehavior() {
        return {top: 0}
    },
    //pages
    //https://gooble.com/
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/movie/:id',
            component: Movie
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
})