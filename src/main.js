import Vue from 'vue'
import App from './App.vue'
import Vuelidate from "vuelidate"
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import massegePlugin from './utils/messages.plugin'
import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/database';
import Loader from "./components/app/Loader";

Vue.config.productionTip = false;
Vue.use(massegePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyDegViSYJf1tvNdrTv8QdxS3eu9yRLI2xo",
  authDomain: "vuecrm2020.firebaseapp.com",
  databaseURL: "https://vuecrm2020.firebaseio.com",
  projectId: "vuecrm2020",
  storageBucket: "vuecrm2020.appspot.com",
  messagingSenderId: "1000676081556",
  appId: "1:1000676081556:web:bbe586152c38730d3e9981"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
})

