<template>
  <sidebar-component></sidebar-component>
  <router-view />
</template>

<script>
// @ is an alias to /src
import SidebarComponent from "../src/components/SidebarComponent.vue";

export default {
  components: { SidebarComponent },
  data: function () {
    return {
      width: "0px",
    };
  },
  methods: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #fafafa;
}
html {
  background-color: #fafafa;
}
</style>
