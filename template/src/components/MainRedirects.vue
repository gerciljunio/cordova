<template>
</template>
<script>
export default {
  beforeCreate() {
  	if (typeof(window.appConfig.appId) !== 'undefined' && window.appConfig.appId) {
  		this.$router.push({ name: 'MainAppHello', params: { id: window.appConfig.appId } })
  	} else {
  		this.$router.push({ name: 'MainAppHello' })
  	}
    
    // console.log(this.$root.isLogged())
  },
};
</script>