<template>
  <div class="main-content-inner">
    <div class="row">
      <div class="col-12 mt-5">
        <div class="card">
          <div class="card-body">
            <h4 class="header-title">Data Table Default</h4>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

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

      return userData;
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
  width: 1000px !important;
  margin-left: 400px !important;
  height: 500px;
}
</style>
<style lang="scss"></style>
