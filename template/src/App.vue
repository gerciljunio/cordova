<template>
  <v-app light>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          exact
        >
          <v-list-tile-action>
            <v-icon light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      {{#router}}
      <router-view></router-view>
      {{else}}
      <hello></hello>
      {{/router}}
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  {{#unless router}}
  import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/unless}}
  import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  export default {
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return {
        cordova: Vue.cordova,
        clipped: false,
        drawer: true,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#unless router}},
    components: {
      Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{/unless}},
    created () {
      var self = this{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.cordova.on('deviceready', () => {
        self.onDeviceReady(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        this.cordova.on('resume', this.onResume, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


        if(this.cordova && process.env.NODE_ENV == 'prod') {
            if(this.cordova.device && this.cordova.device.platform && this.cordova.device.platform.toLowerCase() == 'ios') {
              if(this.cordova.device.model == 'iPhone10,3' || this.cordova.device.model == 'iPhone10,6' || this.cordova.device.model == 'x86_64') {

                // Configurações de statusbar
                if(typeof(StatusBar) !== 'undefined') {
                  // Coloca a statusbar padrão
                  StatusBar.styleDefault();

                  // Mostra satusbar
                  StatusBar.show();
                  StatusBar.overlaysWebView(false);

                  // Executa novamente
                  setTimeout(function() {
                    StatusBar.show();
                    StatusBar.overlaysWebView(false);
                  }, 2000)

                }

              }
            }
        }




      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }, 0){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
	body {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
	}
  .footer{ /* Apply this to v-bottom-nav if necessary. */
    margin-bottom: constant(safe-area-inset-bottom);
    margin-bottom: env(safe-area-inset-bottom);
  }
</style>
