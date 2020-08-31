<template>
    <div>
        <h3>4等分</h3>
        <el-row :gutter='20'>
            <el-col :span='6' ><div class="content">1</div></el-col>
            <el-col :span='6' ><div class="content">2</div></el-col>
            <el-col :span='6' ><div class="content">3</div></el-col>
            <el-col :span='6' ><div class="content">4</div></el-col>  
        </el-row>
        <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style scoped>
.content {
    background-color: rgb(79, 56, 163);

    color:coral;
}

</style>