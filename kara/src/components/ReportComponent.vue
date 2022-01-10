<template>
  <div class="container">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-12">
          <div
            class="d-flex justify-content-between align-items-center activity"
          >
            <div>
              <i class="fa fa-clock-o"></i><span class="ml-2">11h 25m</span>
            </div>
            <div><span class="activity-done">Done Activities</span></div>
            <div class="icons">
              <i class="fa fa-search"></i><i class="fa fa-ellipsis-h"></i>
            </div>
          </div>
          <div class="mt-3">
            <button
              type="button"
              @click="finished = !finished"
              class="btn btn-primary"
            >
              Primary
            </button>
            <ul class="list list-inline">
              <li
                class="d-flex justify-content-between"
                v-for="report in filteredReports"
                v-bind:key="report.id"
              >
                <div class="me-auto">{{ report.damage }}</div>
                <div class="ms-auto">
                  <select
                    v-model="selected"
                    class="form-select"
                    id="inlineFormSelectPref"
                  >
                    <option
                      v-for="option in options"
                      :value="option.value"
                      v-bind:key="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </div>
              </li>
            </ul>
            <div id="">
              {{ message }}<br />
              <input v-model="message" />
            </div>

            <!-- v-else statement finished -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapActions } from "vuex";
export default {
  name: "ReportComponent",
  data() {
    return {
      finished: false,

      userData: null,
      options: [
        { text: true, value: true },
        { text: false, value: false },
      ],
    };
  },
  computed: {
    filteredReports() {
      let userData = this.$store.state.reports.reports;
      console.log("user", userData);
      if (this.finished == false) {
        return this.$store.getters.doneReports;
      } else {
        return this.$store.getters.unfinReports;
      }
    },
    message: {
      get() {
        console.log(this.$store.state.reports.message);
        return this.$store.state.reports.message;
      },
      set(value) {
        console.log(value);
        this.$store.dispatch("updateReports", value);
      },
    },
    selected: {
      get() {
        console.log(this.$store.state.reports.reports.done);
        return this.$store.state.reports.reports.done;
      },
      set(value) {
        this.$store.commit("updateReports", value);
      },
    },
  },
  created() {
    this.$store.dispatch("fetchReports");
  },
  methods: {
    // ...mapActions(["updateReports"]),
    // onChange(event, report) {
    //   console.log(event.target.value);
    //   console.log(report);
    //   const updTodo = {
    //     id: report.id,
    //     done: report.done,
    //   };
    //   this.updateReports(updTodo);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #eee;
}

.icons i {
  color: #b5b3b3;
  border: 1px solid #b5b3b3;
  padding: 6px;
  margin-left: 4px;
  border-radius: 5px;
  cursor: pointer;
}

.activity-done {
  font-weight: 600;
}

.list-group li {
  margin-bottom: 12px;
}

.list-group-item {
}

.list li {
  list-style: none;
  padding: 10px;
  border: 1px solid #e3dada;
  margin-top: 12px;
  border-radius: 5px;
  background: #fff;
}

.checkicon {
  color: green;
  font-size: 19px;
}

.date-time {
  font-size: 12px;
}

.profile-image img {
  margin-left: 3px;
}
</style>
<style lang="scss"></style>
