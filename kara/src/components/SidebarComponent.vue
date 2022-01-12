<template>
  <div class="Sidebar">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon justify-content-start"></span>
        </button>
        <a class="navbar-brand" href="#">Kara</a>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Kara</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
