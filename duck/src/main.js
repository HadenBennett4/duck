import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiArrowLeftCircle,BiArrowRightCircle,BiArrowRightCircleFill,BiArrowLeftCircleFill } from "oh-vue-icons/icons";



const app = createApp(App)
addIcons(BiArrowLeftCircle,BiArrowRightCircle,BiArrowRightCircleFill,BiArrowLeftCircleFill);
app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
