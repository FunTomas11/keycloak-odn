<template>
  <layout>
    <h3 class="title">{{ titles.loginAccountTitle }}</h3>

    <form :action="getUrl(urls.loginAction)" method="post">
      <div class="input-field">
        <input name="username" type="text" :value="forms.loginUsername" class="validate auth-area__input">
        <label for="username" v-text="getUsernameLabel()"></label>
      </div>

      <div class="input-field">
        <input name="password" type="password"  class="validate auth-area__input">
        <label for="username" v-text="labels.password"></label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">Submit</button>
    </form>
    
  </layout>
</template>
<script lang="ts">
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default {
  name: 'Login',
  components: {
    Layout
  },
  setup() {
    return useLogin()
  },
  mounted() {
    console.log('Login')
  }
}
</script>
