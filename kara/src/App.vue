<template>
  <nav class="navbar navbar-light bg-dark p-3">
    <div
      class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between"
    >
      <a class="navbar-brand" href="#"> Simple Dashboard </a>

      <button
        class="navbar-toggler d-md-none collapsed mb-3"
        type="button"
        data-toggle="collapse"
        data-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="col-12 col-md-4 col-lg-2">
      <input
        class="form-control form-control-dark"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </div>
    <div
      class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0"
    >
      <div class="mr-3 mt-1">
        <a
          class="github-button"
          href="https://github.com/themesberg/simple-bootstrap-5-dashboard"
          data-color-scheme="no-preference: dark; light: light; dark: light;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star /themesberg/simple-bootstrap-5-dashboard"
          >Star</a
        >
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Hello, John Doe
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Messages</a></li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <nav
        id="sidebar"
        class="sidebar col-md-4 col-lg-2 d-md-block sidebar collapse"
      >
        <!-- sidebar content goes in here -->
        <div class="pt-md-5">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active bg-dark mb-4 rounded-pill"
                aria-current="page"
                href="#FilterPage"
                >Change list with asset information</a
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link active bg-dark mb-4 rounded-pill"
                aria-current="page"
                href="#UploadAsset"
                >Upload asset information</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active bg-dark mb-4 rounded-pill"
                aria-current="page"
                href="#"
                >Statistic Page</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active bg-dark mb-4 rounded-pill"
                aria-current="page"
                href="#ReportAsset"
                >Report damaged assets
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active bg-dark mb-4 rounded-pill"
                aria-current="page"
                href="#ReportedList"
                >List of reported errands
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
        <h1 class="h2">Dashboard</h1>
      </main>
    </div>
  </div>

  <router-view />
</template>

<script>
// @ is an alias to /src
//import SidebarComponent from "../src/components/SidebarComponent.vue";

export default {
  components: {},
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

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 90px 0 0;
  box-shadow: inset -1px 0 0 rgba(168, 30, 30, 0.1);
  z-index: 99;
  width: 400px !important;
  background-color: black;
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 11.5rem;
    padding: 0;
    width: 270px;
    background-color: rgb(130, 27, 27);
  }
}

.navbar {
  box-shadow: inset 0 -1px 0 rgba(202, 12, 12, 0.1);
}

@media (min-width: 767.98px) {
  .navbar {
    top: 0;
    position: sticky;
    z-index: 999;
  }
}

.sidebar .nav-link {
  color: rgb(165, 34, 34);
}

.sidebar .nav-link.active {
  color: #fdfbfc;
}
</style>
