import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue' // импортируем библиотеку
import 'ant-design-vue/dist/reset.css' // можно также 'ant-design-vue/dist/antd.css'
import './index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
