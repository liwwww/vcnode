<template>
    <div>
        <v-header></v-header>
        <v-content>
            
        </v-content>
    </div>
</template>

<script>
import vHeader from '@/components/header';
import vContent from '@/components/content';
    export default {
        data() {
            return {
                loginname: this.$route.params.name
            }
        },
        components: { vHeader, vContent }
    }
</script>

<style scoped lang="less">
.content {
    padding: 0;
    margin-top: 16px;
    border-radius: 2px;
    background-color: #fff;}

</style>