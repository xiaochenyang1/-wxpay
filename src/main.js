import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' //路由



const app = createApp(App);
app.use(router).mount('#app')
