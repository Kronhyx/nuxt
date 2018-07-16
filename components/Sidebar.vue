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
    <nuxt-link v-for="(item,key) in items" :key="key" :tag="'li'" :to="item.children?'':item.route" :activeClass="'active'">
      <a>
        <i :class="item.icon"></i>
        <span class="nav-label" v-text="item.text"></span>
        <span class="fa arrow" v-if="item.children"></span>
        <span class="label pull-right" v-if="item.badge" :class="'label-'+item.badge.class">
          {{ item.badge.text }}
        </span>
      </a>
      <ul class="nav nav-second-level collapse" v-if="item.children">
        <li v-for="(children, chKey) in item.children" :key="chKey">
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
    data() {
      return {
        items: [
          {
            icon: 'fa fa-th-large',
            text: 'Dashboards',
            route: {
              name: 'dashboard'
            },
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
              name: 'layout',
              params: {}
            }
          },
          {
            icon: 'fa fa-bar-chart-o',
            text: 'Graphs',
            route: {
              name: 'graph',
              params: {}
            }
          },
          {
            icon: 'fa fa-envelope',
            text: 'Mailbox',
            badge: {
              class: 'warning',
              text: '16/24'
            },
            route: {
              name: 'mailbox',
              params: {}
            }
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style>

</style>
