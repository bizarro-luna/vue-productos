import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

//createApp(App).use(router).mount('#app')


moment.locale('es');

let app= createApp(App);

app.config.globalProperties.$moment=moment;
app.use(VueSweetalert2);
app.use(router).mount('#app');