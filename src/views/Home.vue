<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-jumbotron header="Chat App" lead="A simple chat app that is built just for fun and learning">
      <p>Please do not expect much ;)</p>
      <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
        <img srcset="../assets/google-sign-in/1x/btn_google_signin_dark_normal_web.png 1x, ../assets/google-sign-in/2x/btn_google_signin_dark_normal_web@2x.png 2x" onmouse alt="Sign in with Google">
      </g-signin-button>
    </b-jumbotron>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      googleSignInParams: {
        client_id: process.env.VUE_APP_GOOGLE_API_CLIENT_ID
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      this.axios.post('/sessions', {
        token: googleUser.getAuthResponse(true).id_token
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  },
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
/* img:hover {
  background: "../assets/";
} */
</style>
