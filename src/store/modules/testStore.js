const state = {
  data: "testStore",
  otherContents: "testdddd"
};

const getters = {
  showData: function(state){
    return state.data;
  },
  showOthersContent: function (state) {
    return state.otherContents;
  }
};

const mutations = {
  setNewData: function (state,newVal) {
    state.data = newVal;
  },
  setOthersContent : function (state,val) {
    state.otherContents = val;
  }
};

const actions = {
  setData: function (context,val) {
    context.commit("setNewData",val);
  },
  setOthersData: function (context,val) {
    context.commit("setOthersData",val);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
