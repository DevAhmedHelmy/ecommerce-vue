import Home from "@/pages/admin/Home";
import indexProduct from "@/pages/admin/products/index";
export default [
  {
    path: "/admin/test",
    name: "adminTest",
    components: {
      adminPages: Home,
    },
  },
  {
    path: "/admin/products",
    name: "all-products",
    components: {
      adminPages: indexProduct,
    },
  },
  {
    path: "/admin/products/create",
    name: "create-products",
    components: {
      adminPages: indexProduct,
    },
  },
  {
    path: "/admin/products/edit/:id",
    name: "edit-products",
    components: {
      adminPages: indexProduct,
    },
  },
];
