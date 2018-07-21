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
            <menu-nx v-for="(item,key) in items" :key="key" :item="item"/>
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

  export default {
    components: {BreadcrumbNx, NuxtLoading, MenuNx},
    data() {
      return {
        query: null,
        items: [
          {
            icon: 'fa fa-th-large',
            text: 'Dashboards',
            children: [
              {
                text: 'Dashboard v1',
                route: {name: 'dashboard'},
              },
              {
                text: 'Dashboard v2',
                route: {name: 'dashboard-dashboard2'},
              },
              {
                text: 'Dashboard v3',
                route: {name: 'dashboard-dashboard3'},
              },
              {
                text: 'Dashboard v4',
                route: {name: 'dashboard-dashboard4'},
              },
              {
                text: 'Dashboard v5',
                badge: {
                  class: 'primary',
                  text: 'new'
                },
                route: {name: 'dashboard-dashboard5'},
              },
            ]
          },
          {
            icon: 'fa fa-diamond',
            text: 'Layouts',
            route: {name: 'layout'}
          },
          {
            icon: 'fa fa-bar-chart-o',
            text: 'Graphs',
            children: [
              {
                text: 'Flot Charts',
                route: {name: 'graph-flot'},
              },
              {
                text: 'Morris.js Charts',
                route: {name: 'graph-morris'},
              },
              {
                text: 'Rickshaw Charts',
                route: {name: 'graph-rickshaw'},
              },
              {
                text: 'Chart.js',
                route: {name: 'graph-chart'},
              },
              {
                text: 'Chartist',
                route: {name: 'graph-chartist'},
              },
              {
                text: 'C3 Charts',
                route: {name: 'graph-c3'},
              },
              {
                text: 'Peity Charts',
                route: {name: 'graph-peity'},
              },
              {
                text: 'Sparkline Charts',
                route: {name: 'graph-sparkline'},
              },
            ]
          },
          {
            icon: 'fa fa-envelope',
            text: 'Mailbox',
            badge: {
              class: 'warning',
              text: '16/24'
            },
            children: [
              {
                text: 'Inbox',
                route: {name: 'mailbox-inbox'},
              },
              {
                text: 'Email view',
                route: {name: 'mailbox-view'},
              },
              {
                text: 'Compose email',
                route: {name: 'mailbox-compose'},
              },
              {
                text: 'Email templates',
                route: {name: 'mailbox-compose'},
              },
            ]
          },
          {
            icon: 'fa fa-pie-chart',
            text: 'Metrics',
            route: {name: 'metric'}
          },
          {
            icon: 'fa fa-flask',
            text: 'Widgets',
            route: {name: 'widget'}
          },
          {
            icon: 'fa fa-edit',
            text: 'Forms',
            children: [
              {
                text: 'Basic form',
                route: {name: 'form-basic'},
              },
              {
                text: 'Advanced Plugins',
                route: {name: 'form-advanced'},
              },
              {
                text: 'Wizard',
                route: {name: 'form-wizard'},
              },
              {
                text: 'File Upload',
                route: {name: 'form-upload'}
              },
              {
                text: 'Text Editor',
                route: {name: 'form-editor'},
              },
              {
                text: 'Markdown',
                route: {name: 'form-markdown'},
              },
            ]
          },
          {
            icon: 'fa fa-desktop',
            text: 'App Views',
            badge: {
              class: 'primary',
              text: 'special'
            },
            children: [
              {
                text: 'Contacts',
                route: {name: 'app-contact'},
              },
              {
                text: 'Profile',
                route: {name: 'app-profile'},
              },
              {
                text: 'Profile v.2',
                route: {name: 'app-profile2'},
              },
              {
                text: 'Contacts v.2',
                route: {name: 'app-contact2'},
              },
              {
                text: 'Projects',
                route: {name: 'app-project'},
              },
              {
                text: 'Projec detail',
                route: {name: 'app-projectDetail'},
              },
              {
                text: 'Teams board',
                route: {name: 'app-team'},
              },
              {
                text: 'Social feed',
                route: {name: 'app-social'},
              },
              {
                text: 'Clients',
                route: {name: 'app-social'},
              },
              {
                text: 'Outlook view',
                route: {name: 'app-outlook'},
              },
              {
                text: 'Vote list',
                route: {name: 'app-list'},
              },
              {
                text: 'File manager',
                route: {name: 'app-file'},
              },
              {
                text: 'Calendar',
                route: {name: 'app-calendar'},
              },
              {
                text: 'Issue tracker',
                route: {name: 'app-tracker'},
              },
              {
                text: 'Blog',
                route: {name: 'app-blog'},
              },
              {
                text: 'Article',
                route: {name: 'app-article'},
              },
              {
                text: 'FAQ',
                route: {name: 'app-faq'},
              },
              {
                text: 'Timeline',
                route: {name: 'app-timeline'},
              },
              {
                text: 'Pin board',
                route: {name: 'app-pin'},
              },
            ]
          },
          {
            icon: 'fa fa-files-o',
            text: 'Other Pages',
            children: [
              {
                text: 'Search results',
                route: {name: 'other-search'},
              },
              {
                text: 'Lockscreen',
                route: {name: 'other-lockscreen'},
              },
              {
                text: 'Invoice',
                route: {name: 'other-invoice'},
              },
              {
                text: 'Login',
                route: {name: 'other-login'},

              },
              {
                text: 'Login v.2',
                route: {name: 'other-login2'},
              },
              {
                text: 'Forget password',
                route: {name: 'other-forget'},
              },
              {
                text: 'Register',
                route: {name: 'other-register'},
              },
              {
                text: '404 Page',
                route: {name: 'other-404'},
              },
              {
                text: '500 Page',
                route: {name: 'other-500'},
              },
              {
                text: 'Empty page',
                route: {name: 'other-empty'},
              }
            ]
          },
          {
            icon: 'fa fa-globe',
            text: 'Miscellaneous',
            badge: {
              class: 'info',
              text: 'new'
            },
            children: [
              {
                text: "Notification",
                route: {name: "miscellaneous-notification"}
              },
              {
                text: "Nestable list",
                route: {name: "miscellaneous-nestable"}
              },
              {
                text: "Agile board",
                route: {name: "miscellaneous-board"}
              },
              {
                text: "Timeline v.2",
                route: {name: "miscellaneous-timeline"}
              },
              {
                text: "Diff",
                route: {name: "miscellaneous-diff"}
              },
              {
                text: "i18n support",
                route: {name: "miscellaneous-i18n"}
              },
              {
                text: "Sweet alert",
                route: {name: "miscellaneous-alert"}
              },
              {
                text: "Idle timer",
                route: {name: "miscellaneous-timer"}
              },
              {
                text: "Truncate",
                route: {name: "miscellaneous-truncate"}
              },
              {
                text: "Spinners",
                route: {name: "miscellaneous-spinners"}
              },
              {
                text: "Live Favicon",
                route: {name: "miscellaneous-favicon"}
              },
              {
                text: "Google maps",
                route: {name: "miscellaneous-maps"}
              },
              {
                text: "Code editor",
                route: {name: "miscellaneous-editor"}
              },
              {
                text: "Modal window",
                route: {name: "miscellaneous-modal"}
              },
              {
                text: "Clipboard",
                route: {name: "miscellaneous-clipboard"}
              },
              {
                text: "Forum view",
                route: {name: "miscellaneous-forum"}
              },
              {
                text: "Validation",
                route: {name: "miscellaneous-validation"}
              },
              {
                text: "Tree view",
                route: {name: "miscellaneous-tree"}
              },
              {
                text: "Loading buttons",
                route: {name: "miscellaneous-loading"}
              },
              {
                text: "Chat view",
                route: {name: "miscellaneous-chat"}
              },
              {
                text: "Masonry",
                route: {name: "miscellaneous-masonry"}
              },
              {
                text: "Tour",
                route: {name: "miscellaneous-tour"}
              }]
          },
          {
            icon: 'fa fa-flask',
            text: 'UI Elements',
            children: [
              {
                text: "Typography",
                route: {name: "ui-typography"}
              },
              {
                text: "Icons",
                route: {name: "ui-icon"}
              },
              {
                text: "Draggable Panels",
                route: {name: "ui-draggable"}
              },
              {
                text: "Resizeable Panels",
                route: {name: "ui-resizeable"}
              },
              {
                text: "Buttons",
                route: {name: "ui-button"}
              },
              {
                text: "Video",
                route: {name: "ui-video"}
              },
              {
                text: "Panels",
                route: {name: "ui-panel"}
              },
              {
                text: "Tabs",
                route: {name: "ui-tab"}
              },
              {
                text: "Notifications & Tooltips",
                route: {name: "ui-notifications"}
              },
              {
                text: "Badges, Labels, Progress",
                route: {name: "ui-label"}
              }
            ]
          },
          {
            icon: 'fa fa-laptop',
            text: 'Grid options',
            route: {name: 'grid'}
          },
          {
            icon: 'fa fa-table',
            text: 'Tables',
            children: []
          },
          {
            icon: 'fa fa-shopping-cart',
            text: 'E-commerce',
            children: []
          },
          {
            icon: 'fa fa-picture-o',
            text: 'Gallery',
            children: []
          },
          {
            icon: 'fa fa-sitemap',
            text: 'Menu Levels',
            children: []
          },
          {
            icon: 'fa fa-magic',
            text: 'CSS Animations',
            badge: {
              class: 'info',
              text: '62'
            },
            route: {name: 'animation'}
          },
          {
            icon: 'fa fa-star',
            text: 'Landing Page',
            badge: {
              class: 'warning',
              text: 'new'
            },
            route: {name: 'index'}
          },
          {
            icon: 'fa fa-database',
            text: 'Package',
            route: {name: 'package'}
          }
        ]
      }
    }
  }
</script>

<style>
</style>
