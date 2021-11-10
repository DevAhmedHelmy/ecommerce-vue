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
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar progress-bar-danger"
                        style="width: 55%"
                      ></div>
                    </div>
                  </td>
                  <td><span class="badge bg-danger">55%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
          <div class="card-footer clearfix">
            <ul class="pagination pagination-sm m-0 float-right">
              <li class="page-item"><a class="page-link" href="#">«</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">»</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexProduct",
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      try {
        const allData = await this.$http.get(`/products`);
        this.products = allData.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

 