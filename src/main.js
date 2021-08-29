import Vue from 'vue';
import App from './App.vue';
import router from './router.js';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCPQl11pQLVbdtNmwiMAQCQGKRzJu99XoM",
  authDomain: "diomera-4c607.firebaseapp.com",
  projectId: "diomera-4c607",
  storageBucket: "diomera-4c607.appspot.com",
  messagingSenderId: "555006225057",
  appId: "1:555006225057:web:98cfd88cedea08d3ad1ee0",
  measurementId: "G-L715Z4J6FL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
