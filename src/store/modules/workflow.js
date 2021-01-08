import api from "../../net/api";

const state = {
  workflowList: [],
  workflowTotal: 0,
  handleTaskList: [],
  nowTaskList: []
};

const actions = {
  GET_PENDING_WORK_FLOW_LIST: async ({ commit }, payload) => {
    const res = await api.workFlow.getPendingWorkflowList({
      ...payload,
      pageSize: 10
    });
    commit("SET_WORK_FLOW_LIST", { data: res.data, total: res.total });
  },

  GET_PROCESSED_WORK_FLOW_LIST: async ({ commit }, payload) => {
    const res = await api.workFlow.getProcessedWorkflowList({
      ...payload,
      pageSize: 10
    });

    commit("SET_WORK_FLOW_LIST", { data: res.data, total: res.total });
  }
};

const mutations = {
  SET_WORK_FLOW_LIST: (state, value) => {
    state.workflowList = value.data;
    state.workflowTotal = value.total;
  },
  SET_TASK_LIST: (state, value) => {
    state.handleTaskList = value.handleTaskUser;
    state.nowTaskList = value.nowTaskUser;
  }
};

export default {
  namespace: true,
  state,
  actions,
  mutations
};
