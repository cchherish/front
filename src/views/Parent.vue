<template>
    <div>
        <h1>Myparent</h1>
        <h3>{{msg}}</h3>
        <h5>vuex<span style="color: red">{{count}}</span></h5>
        <h5>vuex<span style="color: red">{{doubleCount}}</span></h5>

        <button @click="addCount">增加count</button>

        <mchild v-bind:msg="'from Parent msg'" @showMsg="showMsg" ref='child' v-bind="$attrs"></mchild>
    </div>
</template>

<script>
import Mchild from './Child'
import {mapState} from 'vuex'
    export default {

        computed: {
            ...mapState({
            count: state => state.count.count
        }),
        doubleCount(){
            return this.$store.getters.doubleCount
        }

        },
        // computed: {
        //     count() {
        //         return this.$store.state.count  
        //     }
        // },
        data() {
            return {
                msg: ''
            }   
        },
        components: {
           Mchild ,
        },

        methods: {
            showMsg(val) {
                this.msg  = val;
            },
            addCount(){
                // mutation出发  同步 使用commit
                // this.$store.commit('add')
                //action出发异步  使用dispatch
                this.$store.dispatch('delayAdd')

                // mapmutations
            }
            
        },
        mounted () {
            console.log(this.$children[0].childmsg);
            console.log('ref',this.$refs.child)
        },

    }


</script>

<style>

</style>