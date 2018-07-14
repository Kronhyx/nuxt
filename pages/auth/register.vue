<template>
  <div class="middle-box text-center loginscreen">
    <div>
      <h1 class="logo-name">IN+</h1>
    </div>
    <h3>Register to IN+</h3>
    <p>Create account to see it in action.</p>
    <form class="m-t" role="form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Name" required="">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Email" required="">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" required="">
      </div>
      <div class="form-group">
        <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> Agree the terms and policy </label></div>
      </div>
      <button type="submit" class="btn btn-primary block full-width m-b">Register</button>

      <p class="text-muted text-center">
        <small>Already have an account?</small>
      </p>
      <nuxt-link class="btn btn-sm btn-white btn-block" :to="{name: 'auth-login'}">Login</nuxt-link>
    </form>
    <p class="m-t">
      <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'register',
    layout: 'gray',
    head() {
      return {
        title: 'Register',
      }
    },
  }
</script>

<style scoped>

</style>