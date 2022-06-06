<template>
  <layout>
    <h3 class="title">{{ titles.loginAccountTitle }}</h3>

    <form id="kc-form-login" class="form ${properties.kcFormClass!}" :action="urls.loginAction" method="post">
      <div class="field-container">
        <div class="username-container ${properties.kcFormGroupClass!}">
          <div class="${properties.kcInputWrapperClass!}">
            <label class="mdc-text-field mdc-text-field--filled ${properties.kcLabelClass!} <#if usernameEditDisabled??>mdc-text-field--disabled</#if>">
              <span class="mdc-text-field__ripple"></span>
              <span class="mdc-floating-label ${properties.kcLabelClass!}" v-text="labels.usernameOrEmail">
              </span>
              <input required id="username" class="mdc-text-field__input"
                     aria-labelledby="username" name="username" :value="forms.loginUsername"
                     type="text"
                     autofocus autocomplete="off">
            <span class="mdc-line-ripple"></span>
            </label>
            <div class="mdc-text-field-helper-line">
              <div class="mdc-text-field-helper-text" aria-hidden="true">helper text</div>
            </div>
          </div>
        </div>
        <div class="password-container ${properties.kcFormGroupClass!}">
          <div class="${properties.kcInputWrapperClass!}">


            <label for="password"
                   class="mdc-text-field mdc-text-field--filled ${properties.kcLabelClass!}">
              <span class="mdc-text-field__ripple"></span>
              <span class="mdc-floating-label ${properties.kcLabelClass!}" v-text="labels.password"></span>
              <input required id="password" class="mdc-text-field__input ${properties.kcInputClass!}"
                     name="password" type="password" autocomplete="off">
              <span class="mdc-line-ripple"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="actions-container ${properties.kcFormGroupClass!}">
        <div id="kc-form-options" class="${properties.kcFormOptionsClass!}">
          <div id="kc-form-buttons" class="${properties.kcFormButtonsClass!}">
            <div class="mdc-button-wrapper action ${properties.kcFormButtonsWrapperClass!}">
              <button class="mdc-button mdc-button--raised ${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonLargeClass!}"
                      name="login" id="kc-login" type="submit">
                <span class="mdc-button__label" v-text="labels.doLogIn"></span>
              </button>
            </div>
<!--            <#if realm.resetPasswordAllowed>-->
<!--            <div class="mdc-touch-target-wrapper action ${properties.kcFormOptionsWrapperClass!}">-->
<!--              <button onclick="location.href='${url.loginResetCredentialsUrl}'" class="mdc-button">-->
<!--                <span class="mdc-button__ripple"></span>-->
<!--                <span class="mdc-button__label">${msg("doForgotPassword")}</span>-->
<!--              </button>-->
<!--            </div>-->
<!--          </#if>-->
        </div>
      </div>
      </div>
    </form>
    
  </layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~/components/Layout.vue'
import { useLogin } from '~/hooks'

export default defineComponent({
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
})
</script>
