
const state = {
  data: "loginInformation",
  isLogin: false
};

const getters = {
  getLoginInfo(state){
    return state.data;
  },
  isLogin(state){
    return state.isLogin
  }
};

const mutations = {
  setLoginInfo(state,val){
    state.data = val;
  },
  setLoginState(state,val){
    state.isLogin = val
  }
};

const actions = {
  setLoginInfo(context,val){
    context.commit('setLoginInfo',val)
  },
  setLoginState(context,val){
    context.commit('setLoginState',val)
  }
};


export default {
  state,
  getters,
  mutations,
  actions
}
