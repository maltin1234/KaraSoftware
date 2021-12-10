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
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
