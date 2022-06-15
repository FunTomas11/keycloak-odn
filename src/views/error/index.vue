<template>
  <layout>
    <div id="kc-error-message">
      <p v-text="message.sumary"></p>
      <a :href="getUrl(urls.login)" v-text="labels.backToApplication"></a>
    </div>
  </layout>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import Layout from '~/components/Layout.vue'
import {useLogin} from '~/hooks'

export default defineComponent({
  name: 'Error',
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
