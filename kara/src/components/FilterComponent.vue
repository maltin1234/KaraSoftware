<template>
  <div class="input-group mb-3 filter-one">
    <select class="form-select" id="inputGroupSelect01">
      <option selected>Choose class</option>
      <option value="1">Nature</option>
      <option value="2">Technical</option>
      <option value="3">Samhälle</option>
      <option value="3"></option>
    </select>
    <button type="button" class="btn btn-success">Filter</button>
  </div>
  <div class="input-group mb-3 filter-two">
    <select class="form-select" id="inputGroupSelect01">
      <option selected>Choose year</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <button type="button" class="btn btn-success">Filter</button>
  </div>

  <div class="fixed-bottom">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    <table class="table">
      <thead class="thead-dark table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">S/N</th>
          <th scope="col">Stud Name</th>
          <th scope="col">Location</th>
          <th scope="col">Status</th>
          <th scope="col">CompType</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td><input type="text" class="form-control" /></td>
          <td><input type="text" class="form-control" /></td>
          <td><input type="text" class="form-control" /></td>
          <td><input type="text" class="form-control" /></td>
          <td><input type="text" class="form-control" /></td>
          <td><input type="text" class="form-control" /></td>
        </tr>
        <tr>
          <th class="text-edit" scope="row">Edit</th>
          <td>5CDN098767</td>
          <td>James Hardy</td>
          <td>malmo</td>
          <td>In repair</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>5CDN098BHBD</td>
          <td>Jon Jonasson</td>
          <td>malmo</td>
          <td>Returned</td>
          <td>Mac</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>PX09CTY</td>
          <td>Tom Hardy</td>
          <td>malmo</td>
          <td>Borrowed</td>
          <td>Mac</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>WC1309NY</td>
          <td>Leon Kungen</td>
          <td>malmo</td>
          <td>Needs repair</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>PC1O09Y</td>
          <td>Jon Haraldsson</td>
          <td>malmo</td>
          <td>Not returned</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>WC1NY34O3</td>
          <td>Eli Eliasson</td>
          <td>malmo</td>
          <td>returned</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>PC1O09Y</td>
          <td>Tom Cruise</td>
          <td>malmo</td>
          <td>In repair</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>PC1O09Y</td>
          <td>Meredith Grey</td>
          <td>malmo</td>
          <td>Returned</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
        <tr>
          <th scope="row" class="text-edit">Edit</th>
          <td>PC1O09Y</td>
          <td>Joe Burke</td>
          <td>malmo</td>
          <td>In repair</td>
          <td>Hp</td>
          <td>02/17/2009</td>
        </tr>
      </tbody>
    </table>
    <div v-for="product in products" :key="product.id">
      {{ products }}
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {};
  },
  methods: {},
  computed: {
    products() {
      console.log(this.$store.state.assets);
      return this.$store.state.assets;
    },
  },
  created() {
    this.$store.dispatch("fetchAssets");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pagination > li > a {
  background-color: rgb(15, 13, 13);
  color: #dcdceb;
}

.pagination > li > a:focus,
.pagination > li > a:hover,
.pagination > li > span:focus,
.pagination > li > span:hover {
  color: #5a5a5a;
  background-color: #eee;
  border-color: #ddd;
}

.pagination > .active > a {
  color: white;
  background-color: #5a4181 !important;
  border: solid 1px #5a4181 !important;
}

.pagination > .active > a:hover {
  background-color: #5a4181 !important;
  border: solid 1px #5a4181;
}
.filter-one {
  position: absolute;
  left: 150px;
  top: 150px;
  width: 200px;
}
.filter-two {
  position: absolute;
  left: 500px;
  top: 150px;
  width: 200px;
}
.filter-three {
  position: absolute;
  left: 850px;
  top: 150px;
  width: 200px;
}
.text-edit {
  color: rgb(21, 193, 53);
}
</style>
<style lang="scss"></style>
