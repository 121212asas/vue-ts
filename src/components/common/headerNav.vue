<template>
  <div class="header_nav" @click=getMsg>
    标题{{msg}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch, Provide, Emit} from 'vue-property-decorator'
@Component
export default class App extends Vue {
  /**
   * 定义变量
   */
  @Provide() 
  msg:string = 'hello,world';
  /**
   * 事件
   */
  @Emit('getMsg')
  getMsg () {
    console.log(this.msg)
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
.header_nav{
    width: 100%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    background: #f66;
    color:#fff;
    font-size: 16px;
}
</style>
