<template>
    <div>
        <v-header></v-header>
        <v-content>
            <div class="main-today">
                <el-row class="list">
                    <el-col class="list-avatar" :span="4">
                        <i></i>
                    </el-col>
                    <el-col :span="20" class="list-main">
                        <a>fdfdafdsafds</a>
                        <p>fdsafdsafdsafdasfdsafdsafd asfdsafdsafdsa fdsafdsafdsafdhhhhhhhhhhhhhhhhh hhhhhhhgdfhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgdfhgdfhgdfhgfhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </el-col>
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
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background-color: #000;
        }
        .list-main {
            display: inline-block;
            margin-left: 15px;
            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
</style>