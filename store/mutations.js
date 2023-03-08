export default {
  menushow(state, payload) {
    state.resMenu = payload;
  },
  registerShow(state, payload) {
    state.register = payload;
  },
  windowBacks(state, payload) {
    state.windowBack = payload;
  },
  lessonsNameAdd(state, payload) {
    state.lessonsName = payload;
  },
  mobilSildeBars(state, payload) {
    state.mobilSildeBar = payload;
  },

  islogins(state, payload) {
    state.islogin = payload;
  },
  reviewsDetails(state, payload) {
    state.reviewsDetail = payload;
  },
};
