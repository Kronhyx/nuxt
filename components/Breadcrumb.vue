<template>
  <div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-sm-4">
      <h2>{{ page }}</h2>
      <ol class="breadcrumb">
        <li>
          <a href="#">This is</a>
        </li>
        <li class="active">
          <strong>Breadcrumb</strong>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb-nx',
    methods: {},
    data() {
      return {
        page: 'Test'
      }
    }
  }
</script>

<style>

</style>
