import '~/scss/index.scss'
import { createApp } from 'vue'
import index from './index.vue'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components

const environment = document.querySelector('#environment')
if (environment) {
  const app = createApp(index)
  app.use(BalmUI);
  // @ts-ignore
  app.use(BalmUIPlus);
  app.provide<Environment>('environment', JSON.parse(String(environment.textContent)))
  app.mount('#app')
}
