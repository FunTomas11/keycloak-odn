<template>
  <layout>
    <div class="auth-area__login-content">
      <form ref="authForm" :action="getUrl(urls.loginAction)" method="post"> 
        <div class="flex-column-stretch">
          <div class="input-field">
            <input ref="username" name="username" v-on:change="test" id="username" type="text" :value="forms.loginUsername"
                   class="auth-area__input" required autofocus>
            <label for="username" :class="{ active: forms.loginUsername }" v-text="getUsernameLabel()"></label>
            <span v-if="validations.usernameOrPassword" class="helper-text error-text" v-text="validations.usernameOrPassword"></span>
          </div>

          <div class="input-field">
            <input name="password" id="password" type="password" class="validate auth-area__input" required>
            <label for="password" v-text="labels.password"></label>
          </div>
          <button class="btn waves-effect waves-dark auth-area__button" type="submit" v-text="labels.doLogIn"></button>
          <div class="auth-area__button-wrapper">
            <a v-if="permissions.resetPasswordAllowed" :href="getUrl(urls.loginResetCredentials)" class="waves-effect waves-dark btn-flat auth-area__button auth-area__button--additional"
                    v-text="labels.doForgotPassword" ></a>
          </div>
        </div>
      </form>
    </div>
  </layout>
</template>
<script lang="ts">
import Layout from '~/components/Layout.vue'
import {useLogin} from '~/hooks'
import {ref} from "vue";

export default {
  name: 'Login',
  components: {
    Layout
  },
  setup() {
    return useLogin()
  },
  data: () => ({
    errorMessage: useLogin().validations.value
  }),
}
</script>
