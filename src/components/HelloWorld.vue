<template>
  <div class="content-box">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch, Provide} from 'vue-property-decorator'
@Component
export default class App extends Vue {
  @Watch('msg')
  msgChange (val: string, oldVal: string) {
    console.log(val);
    console.log(oldVal);
  }
  @Provide()
  msg:string = 'hello,world';
  mounted(){
    // this.msg = 'new,world';
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
