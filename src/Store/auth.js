import $axios from "@/core/plugins/axios";
export default {
  state: {
    userData: null,
  },

  getters: {
    user: (state) => state.userData,
  },
  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
  },
  actions: {
    async login(vuexContext, data) {
      try {
        const authUser = await $axios.post("/login", data);
        // These are the Var in the response of the api/login
        const user = authUser.data.user;
        localStorage.setItem("authToken", authUser.data.access_token);
        // This is functions in  mutations I call it for change values in state
        vuexContext.commit("setUserData", user);

        // The promise that will we back to the login.vue
        return authUser;
      } catch (error) {
        // If any error happens in the login api
        if (error.response) {
          return error.response.data.errors;
        } else if (error.response) {
          // The reject() will sent an error to the login.vue
          return error.response.data;
        }
      }
    },
  },
};
