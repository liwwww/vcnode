<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="content">
                <div class="content-menu">
                    <div class="content-title">这是左侧标题</div>
                    <div class="content-tip"></div>
                </div>
                <div class="content-detail">
                    <div class="content-user">
                        <div class="user-detail">
                            <img src="../../components/user.png" alt="头像" />
                            <span>liwwww</span>
                        </div>
                        <div class="user-create-time">12：56 PM</div>
                    </div>
                    <div class="content-main"></div>
                </div>
            </div>
        </v-content>
    </div>
</template>

<script>
import vHeader from '@/components/header.vue';
import vContent from '@/components/content.vue'      
    export default {
        data() {
            return {
                
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
    background-color: #fff;
    .content-menu {
        padding: 20px 16px;
        font-size: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #E4E7ED;
    }
    .content-detail {
        padding: 14px 16px;
        box-sizing: border-box;
        .content-user {
            .user-detail {
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 100%;
                }
                span {
                    display: inline-block;
                    margin: 5px 0 0 20px;
                    vertical-align: top;
                }
            }
        }
    }
}

</style>