import LoginInfo from './modules/loginInfo'
import TestStore from './modules/testStore'

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store(
  {
    modules:{
      LoginInfo,
      TestStore
    }
  });

export default store;
