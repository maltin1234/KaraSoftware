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
            <ul
              class="list list-inline"
              v-for="report in reports"
              v-bind:key="report.id"
            >
              <div v-if="report.done === false && finished === false">
                <li class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <i class="fa fa-check-circle checkicon"></i>
                    <div class="ml-2">
                      <h6 class="mb-0">Kickoff meeting</h6>
                      <div class="d-flex flex-row mt-1 text-black-50 date-time">
                        <div>
                          <i class="fa fa-calendar-o"></i
                          ><span class="ml-2">{{ report.serialNum }}</span>
                        </div>
                        <div class="ml-3">
                          <i class="fa fa-clock-o"></i
                          ><span class="ml-2">6h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div class="d-flex flex-column mr-2">
                      <span class="date-time">{{ report.reporter }}</span>
                    </div>
                    <i class="fa fa-ellipsis-h"></i>
                  </div>
                </li>
              </div>

              <!-- v-else statement here  -->
              <div v-else-if="report.done === true && finished === true">
                <li class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <i class="fa fa-check-circle checkicon"></i>
                    <div class="ml-2">
                      <h6 class="mb-0">Kickoff meeting</h6>
                      <div class="d-flex flex-row mt-1 text-black-50 date-time">
                        <div>
                          <i class="fa fa-calendar-o"></i
                          ><span class="ml-2">{{ report.serialNum }}</span>
                        </div>
                        <div class="ml-3">
                          <i class="fa fa-clock-o"></i
                          ><span class="ml-2">6h</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center">
                    <div class="d-flex flex-column mr-2">
                      <span class="date-time">{{ report.reporter }}</span>
                    </div>
                    <i class="fa fa-ellipsis-h"></i>
                  </div>
                </li>
              </div>
            </ul>
            <!-- v-else statement finished -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportComponent",
  data() {
    return {
      finished: false,

      userData: null,
    };
  },
  computed: {
    reports() {
      let userData = this.$store.state.reports.reports;
      console.log("user", userData);

      return userData;
    },
  },
  created() {
    this.$store.dispatch("fetchReports");
  },
  methods: {},
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
