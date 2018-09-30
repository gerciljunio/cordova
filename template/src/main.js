{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuetify from 'vuetify'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'vuetify/dist/vuetify.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueCordova from 'vue-cordova'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueHead from 'vue-head'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App },
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
