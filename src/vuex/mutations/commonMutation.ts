import {
  SET_LEFT_NAV
} from '../types'
let commonMutation = {
  SET_LEFT_NAV (state, leftNav: boolean) {
    state.leftTodos = leftNav
  }
}
export { commonMutation }
