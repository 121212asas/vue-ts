let commonGetter = {
  // 获取数据
  getLeftStatus: state => {// 左面菜单
    return state.leftTodos
  },
  getRightStatus: state => {// 右面菜单
    return state.rightTodos
  },
  getTitleStatus: state => {// 标题显示
    return state.titleStatus
  },
  getTitleName: state => {// 标题显示的文字
    return state.titleName
  }
}
export { commonGetter }
