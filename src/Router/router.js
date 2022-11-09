import App from "../components/PostsPage.vue"
import Main from "../components/Main.vue"
import {createRouter, createWebHashHistory} from "vue-router"
const routes = [
	{ path: "/posts", component: App },
	{ path: "/", component: Main },
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})