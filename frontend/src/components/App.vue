<template>
	<div class="navbar navbar-default navbar-fixed-top">
	  <ul class="nav navbar-nav navbar-right">
	    <li role="menuitem"><a class="dropdown-item" @click="logout()">Logout</a></li>
	  </ul>
	</div>
  <div class="row">
    <div class="col-lg-8 col-md-7 col-sm-6">
      <div class="panel panel-default">
        <div class="panel-heading text-center">Welcome to the  application</div>
        <div class="panel-body" align="center">
          Current User email: {{ currentUser.email }}
        </div>
      </div>
    </div>
  
  	<div class="list-group">
     	<h4 class="list-group-item-heading">
        <i class="glyphicon glyphicon-picture"></i> 
          {{ currentUser.picture.data.url }}
      </h4>

      <h5>
        <i class="glyphicon glyphicon-tags" ></i> 
        {{ currentUser.fullName }}
      </h5>

      <a href="#" class="list-group-item" v-repeat="photo in currentUser.user_photos">
      	<div class="card" style="width: 20rem;">
    	   <img class="card-img-top"  v-attr="src: photo" alt="Card image">
      	  <div class="card-block">
      	    <h4 class="card-title">photo</h4>
      	    <!--<p class="card-text">if theh photo has a description </p>-->
      	    <a href="#" class="btn btn-primary">See it in  your count</a>
      	  </div>
    	  </div>
      </a>
    </div>
  </div>
</template>

<style src="../style/style.css"></style>

<script>
  import auth from '../auth'
  import {router} from '../index'
  export default {
    data() {
      return {
        // We need to initialize the component with any
        // properties that will be used in it
        currentUser :{}
      }
    },
    // Anything within the ready function will run when the application loads
    ready: function() {
      //check in the begining if the user is already authenticated 
      auth.canActivate();
    },
    methods: {
      OnInit() {
	      auth.getCurrentUser().then(profile => this.currentUser = profile;)
	        .catch(() => this.currentUser = {};);
  	  }

  	  logout() {
  	    auth.logout();
  	    router.go('/login');
  	  }
    }

  }
  </script>
