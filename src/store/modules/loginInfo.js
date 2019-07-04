
const loginInfoStore = {
  data: "loginInformation",
  isLogin: true
};

const getters = {
  getLoginInfo(loginInfoStore){
    return loginInfoStore.data;
  },
  isLogin(loginInfoStore){
    return loginInfoStore.isLogin
  }
};

const mutations = {
  setLoginInfo(loginInfoStore,val){
    loginInfoStore.data = val;
  },
  setLoginState(loginInfoStore,state){
    loginInfoStore.isLogin = state
  }
};

const actions = {
  setLoginInfo(context,val){
    context.commit('setLoginInfo',val)
  },
  setLoginState(context,state){
    context.commit('setLoginState',state)
  }
};


export default {
  loginInfoStore,
  getters,
  mutations,
  actions
}
