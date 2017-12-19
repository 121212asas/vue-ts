<template>
  <div class="hello">
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
    let [first, ...second] = [1,2,3,4,5];
    let secondObj = {
      name:'lizhen',
      age:'12',
      agress:'beijing',
      pass:'123456',
      username:'zhen.li'
    }
    let search = {password:'lizhen',...secondObj}
    let a: string[];
    let ro: ReadonlyArray<string> = ['lizhen','lizhen1','lizhen2'];
    a = ro as string[];
    console.log(a)
    console.log(search)
    /**@augments
     * 包含一个label ,可以是任何类型的
     */
    interface LabelValue {
      label:any
    }
    function printValue(labelObj: LabelValue){
      // console.log(labelObj.label)
    }
    let myObj = {
      label:2311,
      name:'lizhen'
    };
    printValue(myObj)
    /**@augments
     * 第二种写法，但必须是数字
     */
    function printValue2(labelObjs: {label:number}){
      // console.log(labelObjs.label)
    }
    let myObj2 = {
      label:123,
      name:'where are you?'
    }
    printValue2(myObj2)
    /**@augments
     * 可选属性的校验
     */
    interface SquareConfig{
      color?: string;
      width?: number;
    }
    function createdSquare(squareObj:SquareConfig){
      // console.log(squareObj.color||squareObj.width)
      return squareObj.color||squareObj.width
    }
    let myObj3 = {
      width:987654,
      name:'????'
    }
    createdSquare(myObj3);
    /**@augments
     * 混合属性，createSquare(config: SquareConfig): { color: string; area: number }写法错误
     */
    interface SquareConfig1{
      color: string;
      width?: number;
      area: number
    }
    function createdSquare1(squareObj1: SquareConfig1) {
      console.log(squareObj1)
    }
    let myObj4 = {
      color: '123',
      width: 123,
      area: 266608
    }
    createdSquare1(myObj4)
    /**@augments
     * 只读属性
     */
    interface Point {
      readonly x: number;
      readonly y: number;
    }
    let p1: Point = { x:8, y:12};
    /**@augments
     * 绕开类型的强制检查
     */
    interface SquareConfig2{
      color?:string;
      width?:number;
    }
    let mySquare1 = createdSquare({width:100,color:"0.5"} as SquareConfig2);
    // console.log(mySquare1)
    /**@augments
     * 函数类型
     */
    interface SearchFunc {
      (source: string, subString: string): boolean
    }
    let mySearch: SearchFunc;
    // mySearch = function(source: string, subString:string){
    //   let result = source.search(subString);
    //   return result > -1;
    // }
    mySearch = function(src: string, sub:string): boolean{
        let result = src.search(sub);
        console.log(result)
        return result > -1;
    }
    let mySearchObj = mySearch('23456','234');
    // console.log(mySearchObj)
    /**@augments
     * 可索引的类型
     */
    interface StringArray {
      [index: number]:string
    }
    let myArray: StringArray;
    myArray = ['bod','this'];
    // console.log(myArray);
    let myStr: string = myArray[0];
    // console.log(myStr)
    /**@augments
     * 这段再研究
     */
    class Animal {
      name: string
    }
    class Dog extends Animal {
      breed: string
    }
    interface Nookay{
      [x: string]:Animal,
      [y: number]:Dog
    }
    // let noObj:Nookay = [
      
    // ]
    /**@augments
     * 实现类接口
     */
    interface CloclInterface {
      currentTime: Date;
    }
    class Clock implements CloclInterface {
      currentTime: Date = new Date("2010-01-29");
      constructor(h:number,m:number){
        console.log(this.currentTime)
        // console.log(h);
        // console.log(m)
      }
    }
    let myClock = new Clock(64,21);
    /**@augments
     * settime
     */
    interface ClockInterface1 {
      currentTime: Date;
      setTime(d:Date);
    }
    class Clock1 implements ClockInterface1 {
      currentTime: Date;
      setTime(d: Date) {
        this.currentTime = d;
      };
      constructor(h: number,m: number){
        console.log(h)
        console.log(m)
      }
    }
    let myClock2 = new Clock1(22,18)
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
</style>
