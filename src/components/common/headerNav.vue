<template>
<div>
  <mt-header :title="getTitleName">
    <router-link to="/" slot="left" v-if=getLeftStatus>
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-button icon="more" slot="right" v-if=getRightStatus></mt-button>
  </mt-header>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import {Component, Watch, Provide, Emit} from 'vue-property-decorator'
@Component({
  computed: mapGetters(['getLeftStatus','getRightStatus','getTitleName'])
})
export default class App extends Vue {
  /**
   * 定义变量
   */
  @Provide() 
  getLeftStatus:boolean;
  getRightStatus:boolean;
  getTitleName:string;
  /**
   * 事件
   */
  @Emit('getMsg')
  getMsg () {
    console.log(this.getLeftStatus);
    console.log(this.getRightStatus)
  }
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
  /**
   * 初始进入
   */
  mounted () {
    console.log('headerNav进入生命周期')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.left-nav{
  width: 200px;
  position: absolute;
  left: 0;
  top: 51px;
  bottom:0;
  background: rgb(84, 92, 100);
}
.left-nav-top{
  height: 50px;
  line-height: 50px;
  background: rgb(84, 92, 100);
  color:#fff;
  box-shadow: 0 0 4px rgb(84, 92, 100);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
