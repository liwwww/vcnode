<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="main-today">
                <el-row class="list">
                    <el-col class="list-avatar" :span="4">
                        <i></i>
                    </el-col>
                    <el-col :span="19" class="list-main">
                        <a>fdfdafdsafds</a>
                        <p>fdsafdsafdsafdasfdsafdsafd asfdsafdsafdsa fdsafdsafdsafdhhhhhhhhhhhhhhhhh hhhhhhhgdfhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgdfhgdfhgdfhgfhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </el-col>
                    <i></i>
                </el-row>
            </div>
        </v-content>
    </div>
</template>

<script>
import vContent from '../components/content';
import vHeader from '../components/header';

export default {
    components: { vContent, vHeader }
}
</script>

<style scoped lang="less">
.main-today {
    position: relative;
    width: 100%;
    .list {
        position: relative;
        width: 100%;
        margin: 16px 0;
        padding: 16px 20px;
        border-radius: 2px;
        box-sizing: border-box;
        background-color: #fff;
        overflow: hidden;
        .list-avatar {
            width: 42px;
            height: 42px;
            border-radius: 100%;
            background-color: #000;
        }
        .list-main {
            margin-left: 15px;
            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
        i {
            position: absolute;
            display: block;
            width: 24px;
            height: 24px;
            right: 0;
            background-image: url(../commons/img/ypin.png);
            background-size: 24px 24px;
        }
    }
}
</style>