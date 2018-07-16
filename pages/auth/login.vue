<template>
  <div class="middle-box text-center loginscreen">
    <div>
      <h1 class="logo-name">IN+</h1>
    </div>
    <h3>Welcome to IN+</h3>
    <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
      <!--Continually expanded and constantly improved Inspinia Admin Them (IN+)-->
    </p>
    <p>Login in. To see it in action.</p>
    <form class="m-t" role="form">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Username" required="">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required="">
      </div>
      <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

      <nuxt-link :to="{name: 'auth-forgot'}">
        <small>Forgot password?</small>
      </nuxt-link>
      <p class="text-muted text-center">
        <small>Do not have an account?</small>
      </p>
      <nuxt-link :to="{name: 'auth-register'}" class="btn btn-sm btn-white btn-block">Create an account</nuxt-link>
    </form>
    <p class="m-t">
      <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
    </p>
  </div>
</template>

<script>

  export default {
    name: 'login',
    layout: 'gray',
    head() {
      return {
        title: 'Login',
      }
    },
  }
</script>

<style scoped>

</style>