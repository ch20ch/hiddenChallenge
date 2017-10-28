// src/index.js
/*The entry point for the app is at src/index.js. Here we import everything we need and set up routing.*/
import Vue from 'vue'
import App from './components/app.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

// Set up routing and match routes to components
router.map({
  '/App': {
    component: Home
  },
  '/login': {
    component: Login
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/Login'
})

// Start the app on the #app div
router.start(App, '#app')

import auth from './auth'

// Check the users auth status when the app starts
auth.isLoggedIn();
// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();