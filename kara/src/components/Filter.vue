<template>
  <div class="container filter-component d-flex">
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
          <th scope="col">studName</th>
          <th scope="col">Location</th>

          <th scope="col">Status</th>
          <th scope="col">compType</th>
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
          <td></td>

          <td>
            <div v-show="product.edit !== 'serialNum'">
              <label @dblclick="product.edit = 'serialNum'">
                @{{ product.serialNum }}
              </label>
            </div>
            <input
              name="serialNum"
              v-show="product.edit == 'serialNum'"
              v-model="serialNum"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>
          <td>
            <div v-show="product.edit !== 'studName'">
              <label @dblclick="product.edit = 'studName'">
                @{{ product.studName }}
              </label>
            </div>
            <input
              name="studName"
              v-show="product.edit == 'studName'"
              v-model="product.studName"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>
          <td>
            <div v-show="product.edit !== 'location'">
              <label @dblclick="product.edit = 'location'">
                @{{ product.location }}
              </label>
            </div>
            <input
              name="location"
              v-show="product.edit == 'location'"
              v-model="product.location"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>

          <td>
            <div v-show="product.edit !== 'status'">
              <label @dblclick="product.edit = 'status'">
                @{{ product.status }}
              </label>
            </div>
            <input
              name="status"
              v-show="product.edit == 'status'"
              v-model="product.status"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>
          <td>
            <div v-show="product.edit !== 'compType'">
              <label @dblclick="product.edit = 'compType'">
                @{{ product.compType }}
              </label>
            </div>
            <input
              name="compType"
              v-show="product.edit == 'compType'"
              v-model="product.compType"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>
          <td>
            <div v-show="product.edit !== 'date'">
              <label @dblclick="product.edit = 'date'">
                @{{ product.date }}
              </label>
            </div>
            <input
              name="date"
              v-show="product.edit == 'date'"
              v-model="product.date"
              v-on:blur="product.edit = ''"
              @keyup.enter="product.edit = ''"
            />
          </td>
        </tr>
      </tbody>
    </table>
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

      return userData
        .filter((asset) => !asset.serialNum.indexOf(this.searchSerial))
        .filter((asset) => !asset.studName.indexOf(this.searchName))
        .filter((asset) => !asset.status.indexOf(this.searchStatus));
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
  color: #eeeeee;
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
.filter-component {
  width: 20% !important;
}
</style>
<style lang="scss"></style>
