<template>
  <div class="animated fadeIn">
    <nuxt/>
  </div>
</template>

<script>
  export default {
    name: 'gray',
    head() {
      return {
        bodyAttrs: {
          class: 'gray-bg'
        }
      }
    },
  }
</script>

<style scoped>

</style>