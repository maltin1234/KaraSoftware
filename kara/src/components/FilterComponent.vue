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
      <thead>
        <tr>
          <th>
            <input class="" v-model="searchId" />
          </th>
          <th>
            <input class="" v-model="searchSerial" />
          </th>
          <th>
            <input class="" v-model="searchName" />
          </th>
          <th>
            <input class="" v-model="searchLocation" />
          </th>
          <th>
            <input class="" v-model="searchStatus" />
          </th>
          <th>
            <input class="" v-model="searchComptyp" />
          </th>
          <th>
            <input class="" v-model="searchDate" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id">
          <th class="text-edit" scope="row">Edit</th>
          <td>{{ product.serialNum }}</td>
          <td>{{ product.studName }}</td>
          <td>{{ product.location }}</td>
          <td>{{ product.status }}</td>
          <td>{{ product.compType }}</td>
          <td>{{ product.date }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="test()"></button>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      searchId: "",
      searchSerial: "",
      searchName: "",
      searchLocation: "",
      searchStatus: "",
      searchComptyp: "",
      searchDate: "",
      columns: [
        "id",
        "serialNum",
        "studName",
        "location",
        "status",
        "compType",
        "date",
      ],
      userData: null,
    };
  },
  computed: {
    filteredProducts() {
      let userData = this.$store.state.assets.assets;
      console.log("user", userData);
      console.log("searchName", this.searchName);

      if (this.searchName) {
        return userData.filter((item) => {
          console.log("item", item.studName, item);
          return this.searchName
            .toLowerCase()
            .split(" ")
            .every((v) => item.studName.toLowerCase().includes(v));
        });
      } else {
        return userData;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchAssets");
  },
  methods: {},
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
