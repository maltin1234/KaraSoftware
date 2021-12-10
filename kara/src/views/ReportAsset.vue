<template>
  <div class="">
    <!-- <div class="card instruction-card mx-auto">
      <div class="card-body mb-4">Report a damaged asset.</div>
    </div> -->
    <div class="container report-container">
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label"
            >Input serial number of computer
          </label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label"
            >Input student name</label
          >
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label">Input date</label>
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Cause of injury</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
    <button type="button" class="btn btn-lg btn-outline-success">Save</button>
  </div>
</template>

<script>
// @ is an alias to /src
//import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "ReportAsset",
  components: {},
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
