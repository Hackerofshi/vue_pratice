import axios from "axios";
import Router from '../router'
import { Message } from 'element-ui'
import { is } from 'ramda'

export const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : '/api'
export const UPLOAD_BASE_URL = process.env.NODE_ENV === 'development' ? '/api/dfs/upload' : '/api/dfs/upload'

export const instance = axios.create({
    baseURL: 'http://192.168.10.89:9666/api',
    timeout: 1200000,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(async config => {
    const token = await localStorage.getItem('Authorization')
    if (token) {
        config.headers = {
            ...config.headers,
            token,
        }
    }
    return config
})

instance.interceptors.response.use(response => {
    return response
})

/**
 * 处理请求异常
 * */
const handleError = error => {
    if (is(String, error)) {
        Message.error(error)
    } else {
        const { code, message, status } = error
        if (code === 999) {
            Message.error('网络请求超时，请刷新重试')
            return
        }
        if (code === 401) {
            localStorage.removeItem('Authorization')
            Message.error('登录超时')
            Router.replace('/login')
            return
        }
        if (status === 403) {
            Router.replace('/403')
            return
        }
        if (code === 10403) {
            Message.error('没有权限访问，请联系管理员开通功能权限')
            return
        }
        Message.error(message)
    }
}

const request = {
    get: async (url, data) => {
        try {
            const res = await instance.get(url, {
                params: data,
            })
            return res.data
        } catch (error) {
            handleError(error.response ? error.response.data : { code: 999 })
            return Promise.resolve({ success: false })
        }
    },
    post: async (url, data) => {
        try {
            const res = await instance.post(url, data)
            return res.data
        } catch (error) {
            handleError(error.response ? error.response.data : { code: 999 })
            return Promise.resolve({ success: false })
        }
    },
    put: async (url, data) => {
        try {
            const res = await instance.put(url, data)
            return res.data
        } catch (error) {
            handleError(error.response ? error.response.data : { code: 999 })
            return Promise.resolve({ success: false })
        }
    },
    del: async (url, data) => {
        try {
            const res = await instance.delete(url, { data })
            return res.data
        } catch (error) {
            handleError(error.response ? error.response.data : { code: 999 })
            return Promise.resolve({ success: false })
        }
    },
    export: async (url, data) => {
        try {
            const res = await instance.get(url, { params: data, responseType: 'blob' })
            return res.data
        } catch (error) {
            handleError(error.response ? { message: '导出失败' } : { code: 999 })
            return Promise.resolve(false)
        }
    },
}

const auth = {
    /**
     * 登录
     */
    login: data => request.post('/uaa/login', data),
    /**
     * 登出
     */
    logout: () => request.post('/uaa/logout'),
    /**
     * 切换角色
     */
    changeRole: roleId => request.post(`/uaa/changeRole/${roleId}`),
    getBackgroundUrl: () => request.get('/performance/evaluate_time/param/getValueByCode/cover'),
}


const workFlow = {
  /**
   * 获取审批图片
   */
  getFlowImage: id => request.export(`/workflow/rest/formdetail/pic/${id}`),
  /**
   * 获取审批意见记录
   */
  getCommentsByProcessInstanceId: data => request.get('/workflow/rest/formdetail/commentsByProcessInstanceId', data),
  /**
   * 审批任务
   */
  completeWorkflow: data => request.post('/workflow/rest/formdetail/complete', data),
  /**
   * 驳回到上个节点
   */
  returnWorkflow: data => request.post('/workflow/rest/formdetail/reject', data),
  /**
   * 获取待处理的审批任务
   */
  getPendingWorkflowList: data => request.get('/workflow/rest/task/get-applying-tasks', data),
  /**
   * 获取已处理的审批任务
   */
  getProcessedWorkflowList: data => request.get('/workflow/rest/task/get-applyed-tasks', data),
  /**
   * 获取科室下处理和未处理的任务（人）
   */
  getPeriodUserWorkflow: data => request.get('/workflow/rest/task/getTaskPeriodUser', data),
  /**
   * 获取部门下处理和未处理的任务（科室）
   */
  getPeriodRoomWorkflow: data => request.get('/workflow/rest/task/getTaskPeriodRoom', data),
  /**
   * 撤回申请（个人月度考评）
   */
  withdrawWorkflow: data => request.put('/performance/ratio_distrib_head/roll_back', data),
  /**
   * 撤回申请（适合用于部门领导提交科室比例分布）
   */
  withdrawWorkflowS: data => request.get('/workflow/rest/formdetail/rollbackMulti', data),
  /**
   * 撤回申请（科室月度考评）
   */
  withdrawWorkflowD: data => request.put('/performance/ratio_distrib_department/roll_back', data),
  /**
   * 归档
   */
  archiveWorkflow: data => request.post('/workflow/rest/formdetail/archivingTask', data),
  /**
   * 转办
   */
  turnToUser: data => request.post('/workflow/rest/formdetail/turnTask', data),
  /**
   * 获取当前用户需要处理的个人月度考评
   */
  getCurrentUserTask: data => request.get('/workflow/rest/task/getTaskByEmployeeIdAndPeriod', data),
  /**
   * 获取当前用户需要处理的个人月度考评
   */
  getCurrentRoomTask: data => request.get('/workflow/rest/task/getDepartmentTaskByEmployeeIdAndPeriod', data),
  /**
   * 删除任务
   */
  deleteTask: (processInstanceId, taskId) => request.del(`/workflow/rest/task/${processInstanceId}/${taskId}`),
}

export default {
  auth,
  workFlow
}
