import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCsdQqQmFXuRBtWK2sT5A_OQUSlU8vhjt8",
  authDomain: "stripe-learning.firebaseapp.com",
  databaseURL: "https://stripe-learning.firebaseio.com",
  projectId: "stripe-learning",
  storageBucket: "stripe-learning.appspot.com",
  messagingSenderId: "324372854748",
  appId: "1:324372854748:web:3edae7347030ace1de0119",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
