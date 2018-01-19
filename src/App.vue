<template lang="jade">
  #app.allapp
      headerNav(v-if="getTitleStatus")
      router-view
</template>
<script lang="ts">
import Vue from 'vue'
import headerNav from './components/common/headerNav.vue'
import { mapGetters } from 'vuex'
import {Component, Watch, Provide} from 'vue-property-decorator'
@Component({
  components: {
    headerNav
  },
  computed: mapGetters(['getTitleStatus'])
})
export default class App extends Vue {
  @Watch('getTitleStatus', { immediate: true, deep: true })
  onChildChanged (val: boolean, oldVal: boolean) {
    console.log(val);
    console.log('自动监听');
  }
  @Provide() foo = 'foo';
  getTitleStatus: boolean;
  mounted () {
    
  }
}
</script>
<style>
*{
  margin:0;
  padding:0;
}
.allapp{
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  text-align:center;
  color:#2c3e50;
}
</style>