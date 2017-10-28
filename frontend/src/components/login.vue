 <!-- src/components/Login.vue -->
 <!-- is the Login vue that contain the form  -->
 <template>
    <div class="login-page">
      <div class="panel-heading logo">
          <h1>Small facebook</h1>
        </div>
      <div class="panel-body form">

        <form class="login-form">
          <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
          </div>
            <div class="form-group">
              <input type="email" placeholder="example@example.com" id="InputEmail" v-model="user.email"/>
            </div>
            <div class="form-group">
              <input type="password" placeholder="password" id="InputPassword" v-model="user.password" />
            </div>
            <button type="submit" class="btn btn-primary" @click="submit()">Access</button>
        </form>
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
        user: { email: '', password: ''},
        error: ''
      }
    },
    // Anything within the ready function will run when the application loads
    ready: function() {
      auth.start();
      //check in the begining if the user is already authenticated 
      auth.canActivateLogin();
    },
    methods: {
      submit() {
        //call the login method that exist in the auth service 
       auth.fbLogin().then(() => {
          console.log('User has been logged in');
          router.go('App');
        });  }
      }
    }

  }
  </script>