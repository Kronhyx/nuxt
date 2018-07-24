<template>
  <div class="middle-box text-center animated">
    <h1>{{ error.statusCode }}</h1>
    <h3 class="font-bold">{{ error.message }}</h3>
    <div class="error-desc">
      Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh
      button on your browser or try found something else in our app.
      <form class="form-inline m-t" role="form">
        <nuxt-link :to="path('dashboard')" class="btn btn-primary">Dashboard</nuxt-link>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    layout: 'gray',
    props: ['error']
  }
</script>

<style scoped>

</style>
