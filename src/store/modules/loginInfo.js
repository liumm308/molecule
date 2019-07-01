
const loginInfoStore = {
  data: "loginInformation"
};

const getters = {
  getLoginInfo(loginInfoStore){
    return loginInfoStore.data;
  }
};

const mutations = {
  setLoginInfo(loginInfoStore,val){
    loginInfoStore.data = val;
  }
};

const actions = {
  setLoginInfo(context,val){
    context.commit('setLoginInfo',val)
  }
};


export default {
  loginInfoStore,
  getters,
  mutations,
  actions
}
