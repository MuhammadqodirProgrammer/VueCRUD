
import { createApp } from 'vue'
import AppVue from '@/components/app/App.vue'
import uiComponets from './components/ui-componets'
import "./index.css"

const app = createApp(AppVue)
console.log(uiComponets);
// app.use(router)
uiComponets.map(component=>{
  app.component(component.name,component)  
})
app.mount('#app')
