import * as types from '../types'
let commonTodo = {
  setLeftNav ({ commit } ,leftNav: boolean) {
    commit(types.SET_LEFT_NAV,leftNav)
  }
}
export { commonTodo }
