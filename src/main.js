import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AboutMe from './components/AboutMe.vue'
import ProjectsPage from './components/ProjectsPage.vue'
import PublicationsPage from './components/PublicationsPage.vue'
import ContactPage from './components/ContactPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about-me', component: AboutMe },
    { path: '/projects', component: ProjectsPage },
    { path: '/publications', component: PublicationsPage },
    { path: '/contact', component: ContactPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
