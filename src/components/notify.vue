<template>
    <div class="notify">
        <el-button plain @click="openNotify"></el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            openNotify (){
              this.$notify.success({
              title: this.$store.state.notifytitle,
              message: this.$store.state.notifyInfo,
              showClose: false,
              type: this.$store.state.notifySuccess
              });
            }
        }
    }
</script>

<style scoped>
.notify {
    display: none;
}
</style>