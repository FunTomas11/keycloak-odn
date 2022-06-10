import { inject, computed } from 'vue'
import {RuntimeConfig} from "~/@types/runtime-config.model";

const RUNTIME_CONFIG_KEY = 'APP_RUNTIME_CONFIG';
const runtime: RuntimeConfig = window[RUNTIME_CONFIG_KEY] as RuntimeConfig;

export function joinParts(...parts: string[]): string {
  return parts.map(p => p.replace(/^\/+/, '')).map(p => p.replace(/\/+$/, '')).join('/');
}

export const useLogin = () => {
  const env = inject('environment') as Environment
  const getUrl = (url: string) => {
    return url.replace(/(&amp;)/g, '&')
  }
  const getUsernameLabel = () => {
    if (!env.permissions.loginWithEmailAllowed) {
      return env.labels.username
    }
    if (!env.permissions.registrationEmailAsUsername) {
      return env.labels.usernameOrEmail
    }
    return env.labels.email
  }

  const getIcon = (type: string | undefined) => {
    if (type === 'info') {
      return '<i class="fas fa-info-circle"></i>'
    }
    if (type === 'error') {
      return '<i class="fas fa-times-circle"></i>'
    }
    if (type === 'warning') {
      return '<i class="fas fa-exclamation-triangle"></i>'
    }
    if (type === 'success') {
      return '<i class="fas fa-check-circle"></i>'
    }
    if (type === 'github') {
      return '<i class="fab fa-github"></i>'
    }
    return '<i></i>'
  }

  const getSumary = (message: string) => {
    return message.replace(/(&#64;)/g, '@')
  }
  
  const toAbsUrl = (url: string) => {
    if (!url) {
      return url;
    }
    if (url.indexOf('://') >= 0) {
      return url;
    }
    if (url.indexOf('./') >= 0) {
      return url;
    }
    const base = runtime.api.protocol + '://' + runtime.api.hostName + ':' + runtime.api.port + '/';
    return joinParts(base, url);
  }


  return {
    urls: computed(() => env.urls as EnvUrl),
    titles: computed(() => env.titles as EnvTitle),
    permissions: computed(() => env.permissions as EnvPermission),
    labels: computed(() => env.labels as EnvLabel),
    forms: computed(() => env.forms as EnvForm),
    user: computed(() => env.user as EnvUser),
    validations: computed(() => env.validations as EnvValidation),
    message: computed(() => env.message as EnvMessage),
    social: computed(() => env.social as EnvSocial[]),
    instruction: computed(() => env.instruction as EnvInstruction),
    getUrl,
    getUsernameLabel,
    getIcon,
    getSumary,
    toAbsUrl,
    runtime: computed(() => runtime as RuntimeConfig)
  }
}
