<template>
  <layout>
    <form :action="getUrl(urls.loginAction)" class="forgot-password-form" method="post">
      <span class="reset-password__title" v-text="titles.updatePasswordTitle">
      </span>
      <span class="auth__info reset-password__subtitle error-text" v-text="message.sumary"></span>
      <input type="text" id="username" name="username" :value="forms.loginUsername" autocomplete="username" readonly="readonly" style="display:none;"/>
      <input type="password" id="password" name="password" autocomplete="current-password" style="display:none;"/>
      <div class="input-field">
        <input name="password-new" v-model="form.pass" id="password-new" type="password"
               class="auth-area__input" maxlength="50" autofocus autocomplete="new-password">
        <label for="password-new" v-text="labels.passwordNew"></label>
      </div>
      <div class="input-field">
        <input name="password-confirm" v-model="form.confirm" v-on:change="checkForm" id="password-confirm" type="password"
               class="auth-area__input" maxlength="50" autocomplete="new-password">
        <label for="password-confirm" v-text="labels.passwordConfirm"></label>
        <span v-if="form.invalid" class="helper-text error-text" v-text="message.notMatchPasswordMessage"></span>
      </div>
      <button
        type="submit"
        class="btn waves-effect waves-dark auth-area__button"
        :disabled="form.invalid"
        v-text="labels.doSubmit"></button>

    </form>

  </layout>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Layout from '~/components/Layout.vue'
import {useLogin} from '~/hooks'

export default defineComponent({
  name: 'UpdatePassword',
  components: {
    Layout
  },
  data: () => ({
    form: {
      pass: '',
      confirm: '',
      invalid: false,
    }
  }),
  setup() {
    return useLogin()
  },
  methods: {
    checkForm() {
      this.form.invalid = this.form.pass !== this.form.confirm;
    }
  },
  mounted() {
  }
})
</script>
<style>
@import "src/scss/modules/forgot-password.scss";
</style>
