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
                  <th>Product name</th>
                  <th>price</th>
                  <th >Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>
                    {{ product.price }}
                  </td>
                  <td>  <router-link :to="{ name: 'edit-products',params: { id: product.id } }"
                  >Add new</router-link
                ></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        v
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

 