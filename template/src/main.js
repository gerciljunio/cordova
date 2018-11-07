window.apirs = require('./router/api')

/**
 * queryString pack
 * https://github.com/sindresorhus/query-string
 * @see  pages/Auth/Login.vue
 */
window.queryString = require('query-string');
window.queryStringUrl = function(url) {
  return queryString.parse(queryString.extract(url));
}

{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import '@fortawesome/fontawesome-free/css/all.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.CircularJSON = require('circular-json'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuetify from 'vuetify'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'vuetify/dist/vuetify.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueCordova from 'vue-cordova'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueHead from 'vue-head'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.$ = require('jquery'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage, {
  name: 'ls',
})


import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


window.axios = require('axios'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.axios.defaults.timeout = 60000{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
window.axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

});
Vue.prototype.$http = axios.create();

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

import pt from './locale/pt'
import en from './locale/en'
import es from './locale/es'
import it from './locale/it'
import fr from './locale/fr'
const messages = {
  pt: pt,
  en: en,
  es: es,
  it: it,
  fr: fr,
}
window.i18n = new VueI18n({
  locale: window.localStorage.getItem('lng') ? window.localStorage.getItem('lng') : 'pt',
  fallbackLocale: 'pt',
  messages,
})



import colors from 'vuetify/es5/util/colors'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Vuetify, {
  theme: {
    primary: colors.deepPurple.darken1,
    secondary: colors.deepPurple.darken4,
    accent: colors.deepPurple.darken1,
    error: colors.red.base,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.green.base
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})


import './assets/stylus-overrides.styl'

Vue.use(Vuetify){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueCordova){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueHead){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  cordovaScript.setAttribute('type', 'text/javascript'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  cordovaScript.setAttribute('src', 'cordova.js'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  document.body.appendChild(cordovaScript){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


import {localeTools} from './mixins/localeTools'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {authTools} from './mixins/authTools'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {httpsRequests} from './mixins/httpsRequests'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  {{#router}}
  router,
  {{/router}}
  mixins: [localeTools, authTools, httpsRequests],
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App },
  data () {
    return {
      loadingApp: false,
    }
  },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
