<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>

  export default {
    name: 'app',
    components: {
      EmptyLayout: () => import('./layouts/EmptyLayout'),
      MainLayout: () => import('./layouts/MainLayout'),
    },
    computed: {
      layout() {
        return this.$route.meta.layout + "Layout" || "MainLayout";
      }
    }
  }
</script>

<style lang="scss">
  @import '~materialize-css/dist/css/materialize.min.css';
  @import "assets/index.css";
</style>
