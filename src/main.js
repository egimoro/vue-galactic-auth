import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import "./assets/css/main.css";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyAI_8NE6p4GvRzcaD7ncfGG1CCUUUFCk9Q",
  authDomain: "vue-galactic-auth.firebaseapp.com",
  projectId: "vue-galactic-auth",
  storageBucket: "vue-galactic-auth.appspot.com",
  messagingSenderId: "962200553880",
  appId: "1:962200553880:web:b29a881d5dea47719243ed",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
