<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col col-6 mx-auto mt-2">
          <div class="form-group">
            <label for="formGroupExampleInput">#S/N</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
        </div>
        <div class="col col-6 mx-auto mt-2">
          <div class="form-group">
            <label for="formGroupExampleInput2">Studentname</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col col-6 mx-auto">
          <div class="form-group">
            <label for="formGroupExampleInput">Location</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
        </div>
        <div class="col col-6 mx-auto">
          <div class="form-group">
            <label for="formGroupExampleInput2">CompType</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label"
            >Status on computer</label
          >
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option value="Ongoing repair"></option>
            <option value="Damaged turned in"></option>
            <option value="Borrowed"></option>
            <option value="Not Borrowed"></option>
            <option value="Needs to be sent for repair"></option>
          </datalist>
        </div>
      </div>

      <div class="row">
        <div class="col col-12 mx-auto">
          <div class="form-group">
            <label for="formGroupExampleInput2">Date</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Another input"
            />
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto mb-4">
        <button class="btn btn-dark mt-4" type="button">Submit</button>
      </div>
    </form>
  </div>

  <div class="card">
    <div class="card-body bg-dark text-light mb-4">
      Choose to upload asset information via csv/excel files
    </div>
  </div>
  <div class="input-group file-upload mb-3 mx-auto">
    <label class="input-group-text" for="inputGroupFile01">Upload</label>
    <input type="file" class="form-control" id="inputGroupFile01" />
  </div>
  <div class="card instruction-card mx-auto">
    <div class="card-body mb-4">
      You can upload a a csv file with class names and then in change assets you
      can add more information
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import SidebarComponent from "../src/components/SidebarComponent.vue";
//import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "UploadAsset",
  components: {},
  data: function () {
    return {
      width: "0px",
    };
  },
  methods: {
    ...mapActions(["addAsset"]),
    submit() {
      const registerAsset = {
        serialNum: this.serialNum,
        studName: this.studName,
        location: this.location,
        compType: this.compType,
        status: this.status,
        date: this.date,
      };
      this.addAsset(registerAsset);
    },
  },
};
</script>
<style scoped>
.container {
  width: 40%;
}
.file-upload {
  width: 40%;
}
.instruction-card {
  width: 30%;
  background-color: ghostwhite;
}
</style>
