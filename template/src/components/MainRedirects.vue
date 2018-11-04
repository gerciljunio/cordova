<template>
</template>
<script>
export default {
  beforeCreate() {
    this.$router.push({ name: 'Signs' })
    // por verificar se está logado, etc
  },
};
</script>