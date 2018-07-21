<template>
  <li :class="{active: isActive(item)}">
    <nuxt-link :to="item.route?item.route:'#'">
      <i :class="item.icon"></i>
      <span class="nav-label" v-text="item.text"></span>
      <span class="fa arrow" v-if="item.children && !item.badge"></span>
      <span class="label pull-right text-uppercase" v-if="item.badge" :class="'label-'+item.badge.class">
        {{ item.badge.text }}
      </span>
    </nuxt-link>
    <ul class="nav nav-second-level collapse" :class="{in: isActive(item)}" v-if="item.children">
      <menu-nx v-for="(children,key) in item.children" :key="key" :item="children"/>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'menu-nx',
    props: {
      item: {
        type: Object,
        required: false
      }
    },
    methods: {
      isActive(item) {
        let route = typeof item.route !== typeof undefined ? this.$route.name === item.route.name : false;
        let child = typeof item.children !== typeof undefined ? !!item.children.filter((elem) => {
          return this.isActive(elem);
        }).length : false;
        return route || child;
      }
    }
  }
</script>

<style>

</style>
