import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoggedin: false,
    uid: null
  },
  mutations: {
    login: (state, uid) => {
      state.isLoggedIn = true;
      state.uid = uid;
      console.log(uid);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.uid = null
    }
  }
});

export default store;
