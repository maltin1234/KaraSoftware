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
          <th scope="col">Reporter</th>
          <th scope="col">Location</th>
          <th scope="col">Damage</th>
          <th scope="col">Status</th>
          <th scope="col">Priority</th>
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
        <tr v-for="report in filteredReports" :key="report.id">
          <td></td>

          <td>
            <div v-show="report.edit !== 'serialNum'">
              <label @dblclick="report.edit = 'serialNum'">
                @{{ report.serialNum }}
              </label>
            </div>
            <input
              name="serialNum"
              v-show="report.edit == 'serialNum'"
              v-model="serialNum"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'reporter'">
              <label @dblclick="report.edit = 'reporter'">
                @{{ report.reporter }}
              </label>
            </div>
            <input
              name="reporter"
              v-show="report.edit == 'reporter'"
              v-model="report.reporter"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'location'">
              <label @dblclick="report.edit = 'location'">
                @{{ report.location }}
              </label>
            </div>
            <input
              name="location"
              v-show="report.edit == 'location'"
              v-model="report.location"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'damage'">
              <label @dblclick="report.edit = 'damage'">
                @{{ report.damage }}
              </label>
            </div>
            <input
              name="damage"
              v-show="report.edit == 'damage'"
              v-model="report.damage"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'status'">
              <label @dblclick="report.edit = 'status'">
                @{{ report.status }}
              </label>
            </div>
            <input
              name="status"
              v-show="report.edit == 'status'"
              v-model="report.status"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'priority'">
              <label @dblclick="report.edit = 'priority'">
                @{{ report.priority }}
              </label>
            </div>
            <input
              name="priority"
              v-show="report.edit == 'priority'"
              v-model="report.priority"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
          <td>
            <div v-show="report.edit !== 'date'">
              <label @dblclick="report.edit = 'date'">
                @{{ report.date }}
              </label>
            </div>
            <input
              name="date"
              v-show="report.edit == 'date'"
              v-model="report.date"
              v-on:blur="report.edit = ''"
              @keyup.enter="report.edit = ''"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ReportComponent",
  data() {
    return {
      editMode: false,
      editedUser: null,
      searchId: "",
      searchSerial: "",
      searchName: "",
      searchLocation: "",
      searchStatus: "",
      searchComptyp: "",
      searchDate: "",

      userData: null,
    };
  },
  computed: {
    serialNum: {
      get() {
        console.log(this.$store.getters["getReport"]("5CDN098767"));
        return this.$store.getters["getReport"]("5CDN098767");
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },

    filteredReports() {
      let userData = this.$store.state.reports.reports;
      console.log("user", userData);
      console.log("searchName", this.searchName);

      return this.filterProductsBySerial(this.filterProductsByName(userData));
    },
  },
  created() {
    this.$store.dispatch("fetchReports");
  },
  methods: {
    filterProductsBySerial(reports) {
      console.log("report", reports);
      return reports.filter(
        (report) => !report.serialNum.indexOf(this.searchSerial)
      );
    },

    filterProductsByName(reports) {
      return reports.filter(
        (report) => !report.reporter.indexOf(this.searchName)
      );
    },

    filterProductsByCategory(reports) {
      return reports.filter(
        (report) => !report.status.indexOf(this.searchStatus)
      );
    },
    saveData() {},
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
