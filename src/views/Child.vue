<template>
    <div>
        <h5>Mychild</h5>
        <h5>{{msg}}</h5>
        <h6>{{childmsg}}</h6>
        <button @click="passMsg ">go!</button>
    </div>
</template>

<script>
import bus from '../util/bus'

    export default {
        data() {
            return {
                childmsg: 'this is a child msg'
            }
        },
        props: {
            msg: {
                type: String,
                default: ''
            },
        },
        methods: {
            passMsg() {
                this.$emit('showMsg','i am from child')
            }
        },
        mounted () {
            console.log('attr',this.$attrs)
            bus.$on('msg',(val)=>{
                 this.childmsg =val;
            });
        },
    }
</script>

<style>

</style>