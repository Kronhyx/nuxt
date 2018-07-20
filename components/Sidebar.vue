<template>
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
    <nuxt-link v-for="(item,key) in items" :key="key" :tag="'li'" :to="item.route?item.route:'#'"
               :class="{active: isActive(item)}">
      <a>
        <i :class="item.icon"></i>
        <span class="nav-label" v-text="item.text"></span>
        <span class="fa arrow" v-if="item.children && !item.badge"></span>
        <span class="label pull-right text-uppercase" v-if="item.badge" :class="'label-'+item.badge.class">
          {{ item.badge.text }}
        </span>
      </a>
      <ul class="nav nav-second-level collapse" :class="{in: isActive(item)}" v-if="item.children">
        <li v-for="(children, chKey) in item.children" :key="chKey" :class="{active: isActive(children)}">
          <nuxt-link v-text="children.text" :to="children.route">
            <span class="label label-primary pull-right" v-if="children.badge" v-text="children.badge"></span>
          </nuxt-link>
        </li>
      </ul>
    </nuxt-link>
  </ul>
</template>

<script>
  export default {
    name: "sidebar-nx",
    methods: {
      isActive(item) {
        let route = typeof item.route !== typeof undefined ? this.$route.name === item.route.name : false;
        let child = typeof item.children !== typeof undefined ? !!item.children.filter((elem) => {
          return this.isActive(elem);
        }).length : false;
        return route || child;
      }
    },
    data() {
      return {
        items: [
          {
            icon: 'fa fa-th-large',
            text: 'Dashboards',
            children: [
              {
                text: 'Dashboard v1',
                route: {
                  name: 'dashboard'
                },
              }
            ]
          },
          {
            icon: 'fa fa-diamond',
            text: 'Layouts',
            route: {
              name: 'layout'
            }
          },
          {
            icon: 'fa fa-bar-chart-o',
            text: 'Graphs',
            children: [
              {
                text: 'Flot Charts',
                route: {
                  name: 'graph-flot'
                },
              },
              {
                text: 'Morris.js Charts',
                route: {
                  name: 'graph-morris'
                },
              },
              {
                text: 'Rickshaw Charts',
                route: {
                  name: 'graph-rickshaw'
                },
              },
              {
                text: 'Chart.js',
                route: {
                  name: 'graph-chart'
                },
              },
              {
                text: 'Chartist',
                route: {
                  name: 'graph-chartist'
                },
              },
              {
                text: 'C3 Charts',
                route: {
                  name: 'graph-c3'
                },
              },
              {
                text: 'Peity Charts',
                route: {
                  name: 'graph-peity'
                },
              },
              {
                text: 'Sparkline Charts',
                route: {
                  name: 'graph-sparkline'
                },
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
                route: {
                  name: 'mailbox-inbox'
                },
              },
              {
                text: 'Email view',
                route: {
                  name: 'mailbox-view'
                },
              },
              {
                text: 'Compose email',
                route: {
                  name: 'mailbox-compose'
                },
              },
              {
                text: 'Email templates',
                route: {
                  name: 'mailbox-compose'
                },
              },
            ]
          },
          {
            icon: 'fa fa-pie-chart',
            text: 'Metrics',
            route: {
              name: 'metric'
            }
          },
          {
            icon: 'fa fa-flask',
            text: 'Widgets',
            route: {
              name: 'widget'
            }
          },
          {
            icon: 'fa fa-edit',
            text: 'Forms',
            children: [
              {
                text: 'Basic form',
                route: {
                  name: 'form-basic'
                },
              },
              {
                text: 'Advanced Plugins',
                route: {
                  name: 'form-advanced'
                },
              },
              {
                text: 'Wizard',
                route: {
                  name: 'form-wizard'
                },
              },
              {
                text: 'File Upload',
                route: {
                  name: 'form-upload'
                }
              },
              {
                text: 'Text Editor',
                route: {
                  name: 'form-editor'
                },
              },
              {
                text: 'Markdown',
                route: {
                  name: 'form-markdown'
                },
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
                route: {
                  name: 'app-contact'
                },
              },
              {
                text: 'Profile',
                route: {
                  name: 'app-profile'
                },
              },
              {
                text: 'Profile v.2',
                route: {
                  name: 'app-profile2'
                },
              },
              {
                text: 'Contacts v.2',
                route: {
                  name: 'app-contac2'
                },
              },
              {
                text: 'Projects',
                route: {
                  name: 'app-project'
                },
              },
              {
                text: 'Projec detail',
                route: {
                  name: 'app-projectDetail'
                },
              },
              {
                text: 'Teams board',
                route: {
                  name: 'app-team'
                },
              },
              {
                text: 'Social feed',
                route: {
                  name: 'app-social'
                },
              },
              {
                text: 'Clients',
                route: {
                  name: 'app-social'
                },
              },
              {
                text: 'Outlook view',
                route: {
                  name: 'app-outlook'
                },
              },
              {
                text: 'Vote list',
                route: {
                  name: 'app-list'
                },
              },
              {
                text: 'File manager',
                route: {
                  name: 'app-file'
                },
              },
              {
                text: 'Calendar',
                route: {
                  name: 'app-calendar'
                },
              },
              {
                text: 'Issue tracker',
                route: {
                  name: 'app-tracker'
                },
              },
              {
                text: 'Blog',
                route: {
                  name: 'app-blog'
                },
              },
              {
                text: 'Article',
                route: {
                  name: 'app-article'
                },
              },
              {
                text: 'FAQ',
                route: {
                  name: 'app-faq'
                },
              },
              {
                text: 'Timeline',
                route: {
                  name: 'app-timeline'
                },
              },
              {
                text: 'Pin board',
                route: {
                  name: 'app-pin'
                },
              },
            ]
          },
          {
            icon: 'fa fa-files-o',
            text: 'Other Pages',
            children: [
              {
                text: 'Search results',
                route: {
                  name: 'other-search'
                },
              },
              {
                text: 'Lockscreen',
                route: {
                  name: 'other-lockscreen'
                },

              },
              {
                text: 'Invoice',
                route: {
                  name: 'other-invoice'
                },
              },
              {
                text: 'Login',
                route: {
                  name: 'other-login'
                },

              },
              {
                text: 'Login v.2',
                route: {
                  name: 'other-login2'
                },
              },
              {
                text: 'Forget password',
                route: {
                  name: 'other-forget'
                },
              },
              {
                text: 'Register',
                route: {
                  name: 'other-register'
                },
              },
              {
                text: '404 Page',
                route: {
                  name: 'other-404'
                },
              },
              {
                text: '500 Page',
                route: {
                  name: 'other-500'
                },
              },
              {
                text: 'Empty page',
                route: {
                  name: 'other-empty'
                },
              }
            ]
          },
          {
            icon: 'fa fa-globe',
            text: 'Miscellaneous',
            badge: {
              class: 'info',
              text: 'new'
            }
          },
          {
            icon: 'fa fa-flask',
            text: 'UI Elements',
            badge: {
              class: 'warning',
              text: '16/24'
            },
            children: []
          },
          {
            icon: 'fa fa-laptop',
            text: 'Grid options',
            route: {
              name: 'grid'
            }
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
            route: {
              name: 'animation'
            }
          },
          {
            icon: 'fa fa-star',
            text: 'Landing Page',
            badge: {
              class: 'warning',
              text: 'new'
            },
            route: {
              name: 'index'
            }
          },
          {
            icon: 'fa fa-database',
            text: 'Package',
            route: {
              name: 'package'
            }
          }
        ]
      }
    }
  }
</script>

<style>

</style>
