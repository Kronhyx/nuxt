<template>

  <ul class="nav metismenu" id="side-menu">
    <li class="nav-header">
      <div class="dropdown profile-element">
        <span>
          <img alt="image" class="img-circle" src="../assets/img/profile_small.jpg">
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
    <nuxt-link :tag="'li'" v-for="(item,key) in items" :key="key" :to="item.route">
      <a>
        <i :class="item.icon"></i>
        <span class="nav-label" v-text="item.text"></span>
        <span class="fa arrow" v-if="item.children"></span>
      </a>
      <!--<ul class="nav ntrisecond-level collapse" :class="{in: item.active}" v-if="item.children">-->
        <!--<li v-for="(children, chKey) in item.children" :key="chKey">-->
          <!--<nuxt-link v-text="children.text">-->
            <!--<span class="label label-primary pull-right" v-text="children.badge"></span>-->
          <!--</nuxt-link>-->
        <!--</li>-->
      <!--</ul>-->
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
            active: false,
            route: {
              name: 'dashboard',
              params: {}
            },
            children: []
          },
          {
            icon: 'fa fa-diamond',
            text: 'Layouts',
            active: false,
            route: {
              name: 'layout',
              params: {}
            }
          }
        ]
      }
    },
    methods: {
      triggerCollapse(item) {
        this.items.forEach((elem) => {
          if (elem !== item) {
            elem.active = false;
          }
        });
        item.active = !item.active;
      }
    }
  }
</script>

<style>

</style>
