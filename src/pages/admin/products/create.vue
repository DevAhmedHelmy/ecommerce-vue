<template>
  <div>
    <top-bar></top-bar>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-6">
                <h3 class="card-title">Products Data</h3>
              </div>
              <div class="col-6">
                <router-link :to="{ name: 'create-products' }"
                  >Add new</router-link
                >
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body"></div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "createProduct",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {},
};
</script>

 