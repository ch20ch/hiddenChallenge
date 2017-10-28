# hiddenChallenge
this witll maintain  the process of the Facebook authentication. While in our case we will use a client application written in vuejs and a backend REST API that is written in Node.js
The front-end app will be totally decoupled from the back end, and we'll make HTTP requets to RESTful endpoints on our server


# app fonctionnalities 
* Using Facebook profiles to register users
* Logging users in with Facebook profile
* Logging users out
* Checking if users are logged in
* Getting current user
* Display  current user albums and photos 

# what i used in this app 

* [Node.js](https://nodejs.org/en/)
* [Vue.js](https://vuejs.org/)
* [Gulp](http://gulpjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [JavaScript SDK](https://developers.facebook.com/docs/javascript/) for communication with Facebook we will use the official 


# How To Start Application

* Start MongoDB - our application expects that there is `fb-demo` database in MongoDB
* Go to [frontend] folder
    * `npm install`
    * `webpack-dev-server --inline --hot`
* Go to [backend] folder
    * `npm install`
    * `gulp develop`
    

the frontend contain Vue components ( login , App that will  display the user informations )
