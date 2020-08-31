<template>
  <div id="app">
    <!-- this app -->
    <!-- <button @click="passMsg">busClick</button>
    <mparent :msga='msga' :msgb ='msgb' :msgc="msgc"> </mparent> -->
    <!-- <router-link to='/home'>home</router-link>
    <button @click="goHome">gohome</button> -->
    <router-view />
  </div>
</template>

<style>

</style>

<script>
import Mparent from './views/Parent.vue'
import Mchild from './views/Child.vue'
import bus from './util/bus'

export default {
  data() {
    return {
      msga: 'msgaaaa',
      msgb: 'msgbbbb',
      msgc: 'msgcccc',

    }
  },
  methods: {
    passMsg() {
      bus.$emit('msg','this is a msg from APP')
    },
    goHome(){
      // this.$router.push({path: '/home', query:{name: 'Jack'}})
      this.$router.push({name: 'Home', params: {id: 3}})
    }
  },
  components: {
    Mparent,
  },
}
</script>>