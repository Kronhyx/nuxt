<template>
  <div>
    <nuxt-loading/>
    <div id="wrapper">
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <sidebar-nx/>
        </div>
      </nav>

      <div id="page-wrapper" class="gray-bg">
        <div class="row border-bottom">
          <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
              <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
                <i class="fa fa-bars"></i>
              </a>
              <form role="search" class="navbar-form-custom" method="post" action="#">
                <div class="form-group">
                  <input type="text" v-model="query" placeholder="Search for something..." class="form-control"
                         id="top-search">
                </div>
              </form>
            </div>
            <ul class="nav navbar-top-links navbar-right">
              <li>
                <a href="#">
                  <i class="fa fa-sign-out"></i> Log out
                </a>
              </li>
            </ul>

          </nav>
        </div>
        <div class="row wrapper border-bottom white-bg page-heading">
          <div class="col-sm-4">
            <h2>This is main title</h2>
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
        <div class="wrapper wrapper-content animated fadeIn">
          <nuxt/>
        </div>
        <div class="footer">
          <div class="pull-right">10GB of <strong>250GB</strong> Free.
          </div>
          <div>
            <strong>Copyright</strong> Example Company &copy; 2014-2015
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import SidebarNx from "../components/Sidebar";
  import NuxtLoading from "../.nuxt/components/nuxt-loading";

  export default {
    components: {NuxtLoading, SidebarNx},
    data() {
      return {
        query: null
      }
    }
  }
</script>

<style>
</style>
