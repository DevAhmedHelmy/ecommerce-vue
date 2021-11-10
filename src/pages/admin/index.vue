<template>
  
    <div>
        <navbar/>
        <div id="layoutSidenav">
            <sidebar/>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                         <router-view name="adminPages"></router-view>
                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        
    </div>

</template>

<script>
import navbar from './layouts/navbar.vue'
import sidebar from './layouts/sidebar.vue'
export default {
  components: { navbar,sidebar },
    name:"App",
}
</script>

<style>

</style>