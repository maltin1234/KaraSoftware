<template>
  <div class="main-content-inner">
    <div class="row">
      <div class="col-12 mt-5">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Students computers</h4>
            <div class="row">
              <div class="col-sm-12 col-md-6 my-col">
                <div class="dataTables_length" id="dataTable_length">
                  <label
                    >Show
                    <select
                      name="dataTable_length"
                      aria-controls="dataTable"
                      class="custom-select custom-select-sm form-control form-control-sm"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entries</label
                  >
                </div>
              </div>
              <div class="col-sm-12 col-md-6 my-col">
                <div id="dataTable_filter" class="dataTables_filter">
                  <label
                    >Search:<input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder=""
                      aria-controls="dataTable"
                      v-model="searchName"
                  /></label>
                </div>
              </div>
            </div>
            <table id="example" class="table table-striped" style="width: 100%">
              <thead class="">
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

              <tbody>
                <tr v-for="product in filteredProducts" :key="product.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-success"
                      @click="sub(product)"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-primary"
                      @click="view(product)"
                    >
                      View
                    </button>
                  </td>

                  <td>
                    {{ product.serialNum }}
                  </td>

                  <td>
                    <div v-if="product.edit">
                      <input v-model="product.studName" />
                    </div>
                    <div v-else>{{ product.studName }}</div>
                  </td>
                  <td>
                    <div v-if="product.edit">
                      <input v-model="product.location" />
                    </div>
                    <div v-else>{{ product.location }}</div>
                  </td>

                  <td>
                    <div v-if="product.edit">
                      <input v-model="product.status" />
                    </div>
                    <div v-else>{{ product.status }}</div>
                  </td>
                  <td>
                    <div v-if="product.edit">
                      <input v-model="product.compType" />
                    </div>
                    <div v-else>{{ product.compType }}</div>
                  </td>

                  <td>
                    <div v-if="product.edit">
                      <input v-model="product.date" />
                    </div>
                    <div v-else>{{ product.date }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { mapActions } from "vuex";
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
      edit: null,
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

      return this.$store.state.assets.assets.filter(
        (asset) =>
          !asset.serialNum.indexOf(this.searchName) ||
          !asset.studName.indexOf(this.searchName)
      );
    },
  },
  created() {
    this.$store.dispatch("fetchAssets");
  },
  methods: {
    ...mapActions(["updateTodo"]),
    sub(data) {
      data.edit = !data.edit;
      const updTodo = {
        id: data.id,

        serialNum: data.serialNum,
        studName: data.studName,
        location: data.location,
        status: data.status,
        compType: data.compType,
        date: data.date,
        edit: data.edit,
      };
      this.updateTodo(updTodo);
    },
  },
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

.text-edit {
  color: rgb(21, 193, 53);
}
table {
  table-layout: fixed;
}
td {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
.card {
  width: 1100px !important;
  margin-left: 400px !important;
  height: 600px;
}
.my-col {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
<style lang="scss"></style>
