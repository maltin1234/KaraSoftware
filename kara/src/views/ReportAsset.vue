<template>
  <div class="">
    <!-- <div class="card instruction-card mx-auto">
      <div class="card-body mb-4">Report a damaged asset.</div>
    </div> -->
    <form @submit="submit">
      <div class="container report-container">
        <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label"
              >Input serial number of computer
            </label>
            <input
              v-model="serialNum"
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="837826327"></option>
              <option value="88721837"></option>
              <option value="2873823P"></option>
              <option value="PC12892"></option>
              <option value="PC18273"></option>
            </datalist>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label">student</label>
            <input
              v-model="studName"
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions"> </datalist>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label">Status</label>
            <input
              v-model="status"
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions"> </datalist>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label">Priority</label>
            <input
              v-model="priority"
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions"> </datalist>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label">Who reported</label>
            <input
              v-model="reporter"
              class="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions"> </datalist>
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Cause of injury</label
          >
          <textarea
            v-model="damage"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        value="submit"
        class="btn btn-lg btn-outline-success"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// @ is an alias to /src
//import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "ReportAsset",
  components: {},
  methods: {
    ...mapActions(["addReport"]),
    submit(e) {
      e.preventDefault();
      const registerReport = {
        serialNum: this.serialNum,
        reporter: this.reporter,
        location: this.location,
        damage: this.damage,
        status: this.status,
        priority: this.priority,
        date: "date",
        " edit": null,
        done: false,
      };
      this.addReport(registerReport);
    },
  },
};
</script>
<style scoped>
.report-container {
  width: 40%;
}
.instruction-card {
  width: 30%;
  background-color: ghostwhite;
}
</style>
