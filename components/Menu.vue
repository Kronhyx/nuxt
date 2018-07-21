<template>
  <li :class="{active: menu.isCurrent(this.$route)}">
    <nuxt-link :to="menu.$route?menu.$route.path():'#'">
      <i :class="menu.$icon"></i>
      <span class="nav-label" v-text="menu.$text"></span>
      <span class="fa arrow" v-if="menu.$children.length && !menu.$badge"></span>
      <span class="label pull-right text-uppercase" v-if="menu.$badge" :class="'label-'+menu.$badge.$class">
        {{ menu.$badge.$text }}
      </span>
    </nuxt-link>
    <ul class="nav nav-second-level collapse in" v-if="menu.$children.length">
      <menu-nx v-for="(children,key) in menu.$children" :key="key" :menu="children"/>
    </ul>
  </li>
</template>

<script>
  import {Menu} from "../type/menu";

  export default {
    name: 'menu-nx',
    props: {
      menu: {
        type: Menu,
        required: false
      }
    },
    methods: {}
  }
</script>

<style>

</style>
