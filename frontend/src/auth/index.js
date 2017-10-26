/*For communication with Facebook and our backend server we will create that service  */

//import the router refernece that we set in the index file 
  import {router} from '../index'
/* import the config file that contain the tID of the application that we created on 
   Facebook for this app and the secret code */
  import {config} from  '../config/facebook.config.json'

  export default {
  	user: {
    
  	},
  	// call this method when the app is ready 
  	start(){
  		    FB.init({
		      appId      : config.appId,
		      status     : false, // the SDK will attempt to get info about the current user immediately after init
		      cookie     : false,  // enable cookies to allow the server to access
		      // the session
		      xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
		      version    : 'v2.8' // use graph api version 2.5
		    });
  	},
  	// Send a request to the login facebook URL and save the returned JWT
  	fbLogin() {
	    return new Promise((resolve, reject) => {
	      FB.login(result => {
	        if (result.authResponse) {
	          return this.http.post(`http://localhost:3000/api/v1/auth/facebook`, {access_token: result.authResponse.accessToken})
	              .toPromise()
	              .then(response => {
	                var token = response.headers.get('x-auth-token');
	                if (token) {
	                  localStorage.setItem('id_token', token);
	                }
	                resolve(response.json());
	              })
	              .catch(() => reject());
	        } else {
	          reject();
	        }
	      }, {scope: 'public_profile,email,user_photos'})
	    });
	},
	//to loguout the user 
	logout() {
	    localStorage.removeItem(id_token);
	},
	//check if the user is login or not 
	isLoggedIn() {
	    return new Promise((resolve, reject) => {
	      this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
	    });
	},
	//used for getting current user data from the server
	getCurrentUser() {
	    return new Promise((resolve, reject) => {
	      return this.http.get(`http://localhost:3000/api/v1/auth/me`).toPromise().then(response => {
	        resolve(response.json());
	      }).catch(() => reject());
	    });
	},
	//To check if the user is logged in to show   login page when the user is not logged in
	canActivate() {//route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        return this.AuthGuard();
    },

    AuthGuard() {
        return new Promise((resolve, reject) => {
            this.isLoggedIn().then(() => {
                resolve(true);
            }).catch(() => {
                router.go('Login');
                reject(false);
            });
        });
    },
    //To check if the user is logged in to show   dashbord page  when the user is logged in
    canActivateLogin() {//route: ActivatedRouteSnapshot, state: RouterStateSnapshot
        return this.AnonymousGuard();
    }

    AnonymousGuard(){
        return new Promise((resolve, reject) => {
            this.userService.isLoggedIn().then(() => {
                router.go('App');
                reject(false);
            }).catch(() => {
                resolve(true);
            });
        });
    }
  }