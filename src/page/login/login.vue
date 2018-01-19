<template>
  <div class="content-box">
    权限配置
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch, Provide} from 'vue-property-decorator'
import { mapMutations } from 'vuex'
// @Component({
//   ...mapMutations([
//     'SET_TITLE_NAME', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
//   ])
// })
export default class App extends Vue {
  /**@augments
   * 注入监听的函数
   */
  @Watch('msg')
  msgChange (val: string, oldVal: string) {
    console.log(val);
    console.log(oldVal);
  }
  /**@augments
   * 注入参数
   */
  @Provide()
  roleList: Array<any> = [];
  props = {
    label: 'name',
    children: 'zones'
  }
  count: number = 1;
  /**@author
   * 事件执行
   */
  handleCheckChange(data, checked, indeterminate) {
    console.log(data, checked, indeterminate);
  }
  /**@augments
   * 默认进入执行
   */
  mounted(){
    // this.msg = 'new,world';
    // this.$store.commit('SET_TITLE_NAME','登录');
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight:normal;
}
ul {
  list-style-type:none;
  padding: 0;
}
li {
  display:inline-block;
  margin:0 10px;
}
a {
  color:#42b983;
}
.content-box{
  position: absolute;
  left: 204px;
  top:51px;
  right: 0;
}
</style>
