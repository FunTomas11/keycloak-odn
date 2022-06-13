<template>
  <layout>
    <div id="kc-error-message">
      <p v-text="message.sumary"></p>
      <p v-if="client.clientExists">
        <a :href="getUrl(client.baseUrl)" v-text="labels.backToApplication"></a>
      </p>
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
    console.log('Error')
  }
})
</script>
