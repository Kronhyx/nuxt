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
            <menu-nx v-for="(item,key) in items.$elements" :key="key" :menu="item"/>
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
                <nuxt-link :to="{name: 'auth-login'}">
                  <i class="fa fa-sign-out"></i> Log out
                </nuxt-link>
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
  import {Menu, MenuCollection} from "../type/Menu";

  export default {
    components: {BreadcrumbNx, NuxtLoading, MenuNx},
    head() {
      return {
        bodyAttrs: {
          class: 'fixed-sidebar'
        }
      }
    },
    data() {
      return {
        query: null,
        items: new MenuCollection([
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
          new Menu('Mailbox', 'fa fa-envelope').setBadge('16/24', 'warning')
             .addChildren(new Menu('Inbox').setRoute('mailbox-inbox'))
             .addChildren(new Menu('Email View').setRoute('mailbox-view'))
             .addChildren(new Menu('Compose email').setRoute('mailbox-compose'))
             .addChildren(new Menu('Email templates').setRoute('mailbox-template')),
          new Menu('Metrics', 'fa fa-pie-chart').setRoute('metric'),
          new Menu('Widgets', 'fa fa-flask').setRoute('widget'),
          new Menu('Forms', 'fa fa-edit')
             .addChildren(new Menu('Basic Form').setRoute('form-basic'))
             .addChildren(new Menu('Advanced Plugins').setRoute('form-advanced'))
             .addChildren(new Menu('Wizard').setRoute('form-wizard'))
             .addChildren(new Menu('File Upload').setRoute('form-upload'))
             .addChildren(new Menu('Text Editor').setRoute('form-editor'))
             .addChildren(new Menu('Markdown').setRoute('form-markdown')),
          new Menu('App Views', 'fa fa-desktop')
             .addChildren(new Menu('Contacts').setRoute('app-contact'))
             .addChildren(new Menu('Profile').setRoute('app-profile'))
             .addChildren(new Menu('Profile v2').setRoute('app-profile2'))
             .addChildren(new Menu('Contacts v2').setRoute('app-contact2'))
             .addChildren(new Menu('Projects').setRoute('app-project'))
             .addChildren(new Menu('Project detail').setRoute('app-projectDetail'))
             .addChildren(new Menu('Teams board').setRoute('app-team'))
             .addChildren(new Menu('Social feed').setRoute('app-social'))
             .addChildren(new Menu('Clients').setRoute('app-client'))
             .addChildren(new Menu('Outlook view').setRoute('app-outlook'))
             .addChildren(new Menu('Vote list').setRoute('app-list'))
             .addChildren(new Menu('File manager').setRoute('app-file'))
             .addChildren(new Menu('Calendar').setRoute('app-calendar'))
             .addChildren(new Menu('Issue tracker').setRoute('app-tracker'))
             .addChildren(new Menu('Blog').setRoute('app-blog'))
             .addChildren(new Menu('Article').setRoute('app-article'))
             .addChildren(new Menu('FAQ').setRoute('app-faq'))
             .addChildren(new Menu('Timeline').setRoute('app-timeline'))
             .addChildren(new Menu('Pin board').setRoute('app-pin')),
          new Menu('Other Pages', 'fa fa-files-o')
             .addChildren(new Menu('Search results').setRoute('other-search'))
             .addChildren(new Menu('Lockscreen').setRoute('other-lockscreen'))
             .addChildren(new Menu('Invoice').setRoute('other-invoice'))
             .addChildren(new Menu('Login').setRoute('other-login'))
             .addChildren(new Menu('Login v2').setRoute('other-login2'))
             .addChildren(new Menu('Forget password').setRoute('other-forget'))
             .addChildren(new Menu('Register').setRoute('other-register'))
             .addChildren(new Menu('404 Page').setRoute('other-404'))
             .addChildren(new Menu('500 Page').setRoute('other-500'))
             .addChildren(new Menu('Empty page').setRoute('other-empty')),
          new Menu('Miscellaneous', 'fa fa-globe')
             .addChildren(new Menu('Notification').setRoute('miscellaneou-notification'))
             .addChildren(new Menu('Nestable list').setRoute('miscellaneou-nestable'))
             .addChildren(new Menu('Agile board').setRoute('miscellaneou-board'))
             .addChildren(new Menu('Timeline v2').setRoute('miscellaneou-timeline'))
             .addChildren(new Menu('Diff').setRoute('miscellaneou-diff'))
             .addChildren(new Menu('i18n support').setRoute('miscellaneou-i18n'))
             .addChildren(new Menu('Sweet alert').setRoute('miscellaneou-alert'))
             .addChildren(new Menu('Idle timer').setRoute('miscellaneou-timer'))
             .addChildren(new Menu('Truncate').setRoute('miscellaneou-truncate'))
             .addChildren(new Menu('Spinners').setRoute('miscellaneou-spinner'))
             .addChildren(new Menu('Live favicon').setRoute('miscellaneou-favicon'))
             .addChildren(new Menu('Google maps').setRoute('miscellaneou-map'))
             .addChildren(new Menu('Code editor').setRoute('miscellaneou-editor'))
             .addChildren(new Menu('Modal window').setRoute('miscellaneou-modal'))
             .addChildren(new Menu('Clipboard').setRoute('miscellaneou-clipboard'))
             .addChildren(new Menu('Forum view').setRoute('miscellaneou-forum'))
             .addChildren(new Menu('Validation').setRoute('miscellaneou-validation'))
             .addChildren(new Menu('Tree view').setRoute('miscellaneou-tree'))
             .addChildren(new Menu('Loading buttons').setRoute('miscellaneou-loading'))
             .addChildren(new Menu('Chat view').setRoute('miscellaneou-chat'))
             .addChildren(new Menu('Masonry').setRoute('miscellaneou-masonry'))
             .addChildren(new Menu('Tour').setRoute('miscellaneou-tour')),
          new Menu('UI Elements', 'fa fa-flask')
             .addChildren(new Menu('Typography').setRoute('ui-typography'))
             .addChildren(new Menu('Icons').setRoute('ui-icon'))
             .addChildren(new Menu('Draggable Panels').setRoute('ui-draggable'))
             .addChildren(new Menu('Resizeable Panels').setRoute('ui-resizeable'))
             .addChildren(new Menu('Buttons').setRoute('ui-button'))
             .addChildren(new Menu('Video').setRoute('ui-video'))
             .addChildren(new Menu('Panels').setRoute('ui-panel'))
             .addChildren(new Menu('Tabs').setRoute('ui-tab'))
             .addChildren(new Menu('Notifications & tooltips').setRoute('ui-notification'))
             .addChildren(new Menu('Badges, Labels, Progress').setRoute('ui-label')),
          new Menu('Grid options', 'fa fa-laptop').setRoute('grid'),
          new Menu('Tables', 'fa fa-table')
             .addChildren(new Menu('Static Tables').setRoute('table-static'))
             .addChildren(new Menu('Data Tables').setRoute('table-data'))
             .addChildren(new Menu('Foo Tables').setRoute('table-foo'))
             .addChildren(new Menu('jqGrid').setRoute('table-grid')),
          new Menu('E-commerce', 'fa fa-shopping-cart')
             .addChildren(new Menu('Products grid').setRoute('commerce-grid'))
             .addChildren(new Menu('Products list').setRoute('commerce-list'))
             .addChildren(new Menu('Products edit').setRoute('commerce-edit'))
             .addChildren(new Menu('Products detail').setRoute('commerce-detail'))
             .addChildren(new Menu('Cart').setRoute('commerce-cart'))
             .addChildren(new Menu('Orders').setRoute('commerce-order'))
             .addChildren(new Menu('Credit Card form').setRoute('commerce-payments')),
          new Menu('Gallery', 'fa fa-picture-o')
             .addChildren(new Menu('Lightbox Gallery').setRoute('gallery-lightboxt'))
             .addChildren(new Menu('Slick Carousel').setRoute('gallery-slick'))
             .addChildren(new Menu('Bootstrap Carousel').setRoute('gallery-bootstrap')),
          new Menu('Menu Levels', 'fa fa-sitemap')
             .addChildren(new Menu('Thrid Level')
                .addChildren(new Menu('Thrid Level'))
                .addChildren(new Menu('Thrid Level'))
                .addChildren(new Menu('Thrid Level')))
             .addChildren(new Menu('Second Level item'))
             .addChildren(new Menu('Second Level item'))
             .addChildren(new Menu('Second Level item')),
          new Menu('CSS Animations', 'fa fa-magic').setRoute('animation'),
          new Menu('Landing Page', 'fa fa-star').setRoute('index').addClass('landing_link'),
          new Menu('Package', 'fa fa-database').setRoute('package').addClass('special_link'),
        ])
      }
    }
  }
</script>

<style scoped>

</style>
