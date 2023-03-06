export default {
  menuShowRes({ commit }, payload) {
    commit("menushow", payload);
  },
  registershow({ commit }, payload) {
    commit("registerShow", payload);
  },
  windowBack({ commit }, payload) {
    commit("windowBacks", payload);
  },
  lessonsName({ commit }, payload) {
    commit("lessonsNameAdd", payload);
  },
  mobilSildeBar({ commit }, payload) {
    commit("mobilSildeBars", payload);
  },
  islogin({ commit }, payload) {
    commit("islogins", payload);
  },
};
