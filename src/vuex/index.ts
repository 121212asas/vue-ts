import { commonState } from './states/commonState'
import { commonMutation } from './mutations/commonMutation'
import { commonTodo } from './todos/todo'
import { commonGetter } from './getters/commonGetter'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * 全部状态集控制,必须以文件隔离
 * allStates:commonState
 * alllMutations:commonMutation
 * allTodos:commonTodo
 * allGetters:commonGetter
 */
let allStates = { ...commonState }
let alllMutations = { ...commonMutation }
let allTodos = { ...commonTodo }
let allGetters = { ...commonGetter }
const store = new Vuex.Store({
  state: allStates,
  mutations: alllMutations,
  actions: allTodos,
  getters: allGetters
})
export { store }
