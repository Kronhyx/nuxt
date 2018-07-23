<template>
  <li :class="{active: menu.isCurrent(this.$route)}">
    <nuxt-link :to="menu.$route?menu.$route.path():'#'">
      <i :class="menu.$icon"></i>
      <span class="nav-label" v-text="menu.$text"></span>
      <span class="fa arrow" v-if="menu.$children.isFilled() && !menu.$badge"></span>
      <span class="label pull-right text-uppercase" v-if="menu.$badge" :class="'label-'+menu.$badge.$class">
        {{ menu.$badge.$text }}
      </span>
    </nuxt-link>
    <ul class="nav nav-second-level collapse" :class="{in: menu.isCurrent(this.$route)}"
        v-if="menu.$children.$elements.length">
      <menu-nx v-for="(element,key) in menu.$children.$elements" :key="key" :menu="element"/>
    </ul>
  </li>
</template>

<script>
  import {Menu} from "../type/Menu";

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

<style scoped>

</style>
