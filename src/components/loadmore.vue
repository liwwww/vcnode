<template>
    <div class="load-container">
        <el-button class="loadBtn" type="primary" :loading="isLoading" @click="isLoad">加载更多</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            isLoad (){
                
            }
        }
        
    }
</script>

<style scoped lang="less">
.load-container {
    position: relative;
    width: 100%;
    padding: 14px 10px;
}
.loadBtn {
    position: relative;
    display: inherit;
    width: 180px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
}

</style>