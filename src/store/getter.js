export default {
  isLogin: state => state.auth.isLogin,

  /**
   * 待办列表
   */
  workflowList: state => state.workFlow.workflowList,
  /**
   * 待办总数
   */
  workflowTotal: state => state.workFlow.workflowTotal
};
