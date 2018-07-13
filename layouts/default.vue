<template>
  <div id="wrapper">

    <nav class="navbar-default navbar-static-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
          <li class="nav-header">
            <div class="dropdown profile-element">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                <span class="clear">
                  <span class="block m-t-xs">
                    <strong class="font-bold">David Williams</strong>
                  </span>
                  <span class="text-muted text-xs block">Art Director</span>
                </span>
              </a>
            </div>
            <div class="logo-element">IN+</div>
          </li>
          <li class="active">
            <a href="index.html">
              <i class="fa fa-th-large"></i>
              <span class="nav-label">Main view</span>
            </a>
          </li>
          <li>
            <a href="minor.html">
              <i class="fa fa-th-large"> </i>
              <span class="nav-label">Minor view</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div id="page-wrapper" class="gray-bg">
      <div class="row border-bottom">
        <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#">
              <i class="fa fa-bars"></i>
            </a>
            <form role="search" class="navbar-form-custom" method="post" action="#">
              <div class="form-group">
                <input type="text" placeholder="Search for something..." class="form-control" id="top-search">
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
      <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
          <nuxt/>
        </div>
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
</template>

<script>
  export default {}
</script>

<style>
  @import '../assets/css/bootstrap.min.css';
  @import '../assets/font-awesome/css/font-awesome.css';
  @import '../assets/css/animate.css';
  @import '../assets/css/style.css';
</style>
