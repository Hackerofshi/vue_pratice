import api from "../../net/api";
import toast from "../../common/toast";
const state = {
  isLogin: false,
  userInfo: {},
  menus: [],
  currentPeriod: null
};
const actions = {
  LOGIN: async ({ commit }, payload) => {
    const res = await api.auth.login(payload);
    if (res.success) {
      commit("SET_LOGIN_SUCCESS", res.data.token);
    } else {
      commit("SET_LOGIN_FAIL");
    }
    return Promise.resolve(res.success);
  },
  GET_BACKGROUND_URL: async () => {
    const res = await api.auth.getBackgroundUrl();
    return Promise.resolve(res);
  }
};

const mutations = {
  SET_LOGIN_SUCCESS: (state, value) => {
    localStorage.setItem("Authorization", value);
    state.isLogin = true;
  },
  SET_LOGIN_FAIL: state => {
    localStorage.removeItem("Authorization");
    state.isLogin = false;
  }
};

export default {
  namespace: true,
  state,
  actions,
  mutations
};
