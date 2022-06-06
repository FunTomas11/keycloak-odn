<template>
  <div class="auth">
    <div class="top-bar">
    <span class="top-bar__actions">
      <a class="top-bar__action"
         tabindex="1">
          <i class="material-icons">filter_b_and_w</i>
          <span>High contrast</span>
      </a>
      <button class="top-bar__language-button"
              tabindex="2">
        <i class="material-icons">language</i>
        <span>Language</span>
      </button>
    </span>
    </div>
    <div class="auth__wrapper">
      <header class="header">
        <div class="header__logo">
          <img :src="getUrl(urls.resourcesPath) + logo" class="app-logo" alt="logo">
        </div>
        <nav class="header__menu">
          <a class="header__menu-item"
             tabindex="3"
             v-for="menuItem in menuItems">
            <i class="material-icons">{{menuItem.icon}}</i>
            <span>{{ menuItem.translation }}</span>
          </a>
        </nav>
        <button class="header__menu-button"
                tabindex="2"
        >
          <i class="material-icons">{{ showMenu ? 'close' : 'dehaze'}}</i>
        </button>
      </header>
      <nav class="mobile-menu" :class="{'mobile-menu--show': showMenu}">
        <div class="mobile-menu__item"
             v-for="menuItem in menuItems">
          <i class="material-icons">{{menuItem.icon}}</i>
          <span>{{ menuItem.translation }}</span>
        </div>
        <hr>
        <div class="mobile-menu__item mobile-menu__item--small">
          <i class="material-icons">filter_b_and_w</i>
          <span>High contrast </span>
        </div>
        <div class="mobile-menu__item mobile-menu__item--small"
        >
          <i class="material-icons">language</i>
          <span>English</span>
        </div>
      </nav>
      <div class="container auth__container" style="padding-top: 10vh">
        <section class="generic-auth-area">
          <div class="generic-auth-area__form-container">
            <slot></slot>
          </div>
          <div class="generic-auth-area__image-container">
            <img src="" class="img-responsive auth-area__image" alt="logo">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {useLogin} from "~/hooks";

export default defineComponent({
  name: 'Layout',
  setup() {
    return useLogin();
  },
  data: () => ({
    logo: '/images/viki-logo.svg',
    menuItems: [
      {
        translation: 'Materials',
        icon: 'filter_none',
        title: 'resources'
      },
      {
        translation: 'Use assignment code',
        icon: 'vpn_key',
        title: 'student-assignments'
      },
      {
        translation: 'Open user guide',
        icon: 'local_library',
        title: 'user-guide'
      }
    ]
  })
})
</script>
