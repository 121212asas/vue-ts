import {
  SET_LEFT_STATUS,
  SET_RIGHT_STATUS,
  SET_TITLE_STATUS,
  SET_TITLE_NAME
} from '../types'
let commonMutation = {
  // 更改左面的状态
  SET_LEFT_STATUS (state, leftStatus: boolean) {
    state.leftTodos = leftStatus
  },
  // 更改右面的状态
  SET_RIGHT_STATUS (state, rightStatus: boolean) {
    state.rightTodos = rightStatus
  },
  // 顶部标题是否显示
  SET_TITLE_STATUS (state, titleStatus: boolean) {
    state.titleStatus = titleStatus
  },
  // 顶部标题是否显示
  SET_TITLE_NAME (state, titleName: string) {
    state.titleName = titleName
  }
}
export { commonMutation }
