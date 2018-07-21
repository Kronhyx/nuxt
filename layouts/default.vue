<template>
  <div>
    <nuxt-loading/>
    <div id="wrapper">
      <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
          <ul class="nav metismenu" id="side-menu">
            <li class="nav-header">
              <div class="dropdown profile-element">
        <span>
          <img alt="image" class="img-circle" src="../static/img/profile_small.jpg">
        </span>
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
            <menu-nx v-for="(item,key) in items" :key="key" :menu="item"/>
          </ul>
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
        <breadcrumb-nx/>
        <div class="wrapper wrapper-content animated fadeIn">
          <nuxt/>
        </div>
        <div class="footer">
          <div class="pull-right">Powered by: <strong>Kronhyx</strong>
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
  import MenuNx from "../components/Menu";
  import NuxtLoading from "../.nuxt/components/nuxt-loading";
  import BreadcrumbNx from "../components/Breadcrumb";
  import {Menu} from "../type/menu";

  export default {
    components: {BreadcrumbNx, NuxtLoading, MenuNx},
    data() {

      return {
        query: null,
        items: [
          new Menu('Dashboards', 'fa fa-th-large')
             .addChildren(new Menu('Dashboard v1').setRoute('dashboard'))
             .addChildren(new Menu('Dashboard v2').setRoute('dashboard-dashboard2'))
             .addChildren(new Menu('Dashboard v3').setRoute('dashboard-dashboard3'))
             .addChildren(new Menu('Dashboard v4').setRoute('dashboard-dashboard4'))
             .addChildren(new Menu('Dashboard v5').setRoute('dashboard-dashboard5').setBadge('NEW', 'primary')),
          new Menu('Layouts', 'fa fa-diamond').setRoute('layout'),
          new Menu('Graphs', 'fa fa-bar-chart-o')
             .addChildren(new Menu('Flo Charts').setRoute('graph-flot'))
             .addChildren(new Menu('Morris.js Charts').setRoute('graph-morris'))
             .addChildren(new Menu('Rickshaw Charts').setRoute('graph-rickshaw'))
             .addChildren(new Menu('Chart.js').setRoute('graph-chart'))
             .addChildren(new Menu('C3 Charts').setRoute('graph-c3'))
             .addChildren(new Menu('Peity Charts').setRoute('graph-peity'))
             .addChildren(new Menu('Sparkline Charts').setRoute('graph-sparkline')),
          new Menu('Mailbox', 'fa fa-envelope').setRoute('mailbox').setBadge('16/24', 'warning'),
          new Menu('Metrics', 'fa fa-pie-chart').setRoute('metric'),
          new Menu('Widgets', 'fa fa-flask').setRoute('widget'),
          new Menu('Forms', 'fa fa-edit')
             .addChildren(new Menu('Basic Form').setRoute('form-basic'))
             .addChildren(new Menu('Advanced Plugins').setRoute('form-advanced'))
             .addChildren(new Menu('Wizard').setRoute('form-wizard'))
             .addChildren(new Menu('File Upload').setRoute('form-upload'))
             .addChildren(new Menu('Text Editor').setRoute('form-editor'))
             .addChildren(new Menu('Markdown').setRoute('form-markdown')),
          new Menu('App Views', 'fa fa-desktop'),
          new Menu('Other Pages', 'fa fa-files-o'),
          new Menu('Miscellaneous', 'fa fa-globe'),
          new Menu('UI Elements', 'fa fa-flask'),
          new Menu('Grid options', 'fa fa-laptop').setRoute('grid'),
          new Menu('Tables', 'fa fa-table'),
          new Menu('E-commerce', 'fa fa-shopping-cart'),
          new Menu('Gallery', 'fa fa-picture-o'),
          new Menu('Menu Levels', 'fa fa-sitemap'),
          new Menu('CSS Animations', 'fa fa-magic').setRoute('animation'),
          new Menu('Landing Page', 'fa fa-star').setRoute('index'),
          new Menu('Package', 'fa fa-database').setRoute('package'),
        ]
      }
    }
  }
</script>

<style>
</style>
