import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import getters from './getter'



/**
 * 自动加载modules文件夹所有文件
 */
const modulesFiles = require.context('./modules', true, /.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^.\/(.*)\.js/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  getters,
  modules,
})
