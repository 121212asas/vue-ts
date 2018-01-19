import * as types from '../types'
let commonTodo = {
  setLeftNav ({ commit } ,leftStatus: boolean) {
    commit(types.SET_LEFT_STATUS,leftStatus)
  },
  setRightStatus ({ commit } ,rightStatus: boolean) {
    commit(types.SET_RIGHT_STATUS,rightStatus)
  },
  setTitleStatus ({ commit } ,titleStatus: boolean) {
    commit(types.SET_TITLE_STATUS,titleStatus)
  },
  setTitleName ({ commit } ,titleName: string) {
    commit(types.SET_TITLE_NAME,titleName)
  }
}
export { commonTodo }
