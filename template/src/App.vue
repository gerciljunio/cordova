<template>
  <v-app>
    <v-dialog v-model="$root.loadingApp" :fullscreen="true" hide-overlay persistent :transition="false">
      <v-card style="background-color:rgba(255, 255, 255, 0.8);">
        <v-card-text class="text-xs-center pt-5">

          <v-progress-circular
          :size="100"
          :width="7"
          color="purple"
          indeterminate
          class="mt-5"
          ></v-progress-circular>

        </v-card-text>
      </v-card>
    </v-dialog>

    <router-view></router-view>
  </v-app>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        cordova: Vue.cordova,
      }
    },
    created () {
      var self = this
      this.cordova.on('deviceready', () => {
        self.onDeviceReady()
      })
    },
    methods: {
      onDeviceReady: function () {
        // Handle the device ready event.
        this.cordova.on('pause', this.onPause, false)
        this.cordova.on('resume', this.onResume, false)
        if (this.cordova.device.platform === 'Android') {
          document.addEventListener('backbutton', this.onBackKeyDown, false)
        }

        // Mixin deviceTools
        this.$root.defineStatusBar()

        // Mixin Adapt Keyboard Input Focus Android
        this.$root.keyboardAdapt()
      },
      onPause () {
        // Handle the pause lifecycle event.
        console.log('pause')
      },
      onResume () {
        // Handle the resume lifecycle event.
        // SetTimeout required for iOS.
        setTimeout(function () {
          console.log('resume')
        }, 0)
      },
      onBackKeyDown () {
        // Handle the back-button event on Android. By default it will exit the app.
        navigator.app.exitApp()
      }
    }
  }
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

  .v-messages__message {
    margin-bottom: 7px !important;
  }
  .v-text-field__details {
    padding-left: 0 !important;
  }

  * {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  }

  input, textarea {
  -webkit-user-select: auto !important;
  -khtml-user-select: auto !important;
  -moz-user-select: auto !important;
  -ms-user-select: auto !important;
  user-select: auto !important;
  }
</style>
