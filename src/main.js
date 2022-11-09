import { createApp } from "vue";
import App from "./App.vue"
import {router} from "./Router/router"
import {directives} from "./directives/index"

const app = createApp(App)

directives.forEach(directive => {
	app.directive(directive.name, directive.directive)
})

app
	.use(router)
	.mount("#app")