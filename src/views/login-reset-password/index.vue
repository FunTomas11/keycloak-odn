<template>
  <layout>
    <div v-if="message.sumary" :class="`alert-${message.type}`">
      <span v-html="getIcon(message.type)"></span>
      <span v-text="message.sumary"></span>
    </div>
    <form :action="getUrl(urls.loginAction)"
          method="post"
          novalidate
          class="forgot-password-form"
    >
      <span class="reset-password__title" v-text="titles.emailForgotTitle"></span>
      <div class="input-field">
        <input name="username" v-on:change="test" id="username" type="text" :value="forms.loginUsername"
               class="auth-area__input" maxlength="50" autofocus>
        <label for="username" v-text="getUsernameLabel()"></label>
        <span v-if="validations.usernameOrPassword"
              class="helper-text error-text">{{ validations.usernameOrPassword }}</span>
      </div>
      <button
        type="submit"
        class="forgot-button btn waves-effect waves-dark"
        v-text="labels.doSubmit"></button>
      <a :href="getUrl(urls.login)" class="forgot-button additional waves-effect waves-dark btn-flat" v-text="labels.backToLogin"></a>
    </form>
  </layout>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Layout from '~/components/Layout.vue'
import {useLogin} from '~/hooks'

export default defineComponent({
  name: 'ResetPassword',
  components: {
    Layout
  },
  setup() {
    return useLogin()
  },
  mounted() {
  }
})
</script>
<style>
@import "src/scss/modules/forgot-password.scss";
</style>
