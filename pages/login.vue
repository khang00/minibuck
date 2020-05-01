<template>
  <v-row align="center" class="mt-11" justify="space-around">
    <basic-form
      action="login"
      title="Login"
      :model="loginModel"
      height="50vh"
      width="40%"
      @login="login"
    />
    <basic-form title="Create Account" height="75vh" width="40%" />
  </v-row>
</template>

<script>
import LoginForm from '../components/authentication/BasicForm'

export default {
  name: 'Login',
  components: {
    'basic-form': LoginForm
  },
  data () {
    return {
      loginModel: {
        username: {
          value: '',
          type: 'text'
        },
        password: {
          value: '',
          type: 'password'
        }
      }
    }
  },
  methods: {
    login (payload) {
      // eslint-disable-next-line no-console
      console.log(`The user is ${payload}`)
    }
  }
}
</script>

<style scoped>

</style>
