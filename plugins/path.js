import Vue from 'vue'

export default () => {

  Vue.mixin({
    methods: {
      path(path, params = {}) {
        return {name: path, params: params};
      },
    }
  })
}
