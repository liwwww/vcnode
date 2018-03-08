<template>
    <div>
        <v-header></v-header>
        <v-content>
            <nav class="main-today">
                <div class="list">
                    <div class="list-avatar">
                        <i></i>
                    </div>
                    <div class="list-main">
                        <a>fdfdafdsafds</a>
                        <p>fdsafdsafdsafdasfdsafdsafdasfdsafdsafdsafdsafdsafdsafdhhhhhhhhhhhhhhhhhhhhhhhhgdfhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgfdhgdfhgdfhgdfhgfhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </div>
                </div>
            </nav>
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
        display: flex;
        width: 100%;
        margin: 16px 0;
        padding: 16px 20px;
        border-radius: 2px;
        box-sizing: border-box;
        background-color: #fff;
        overflow: hidden;
        .list-avatar {
            display: inline-block;
            flex: 1;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background-color: #000;
        }
        .list-main {
            display: inline-block;
            margin-left: 15px;
            width: 800px;
            p {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
</style>