<template>
    <div>
    <v-header></v-header>
    <v-content>
        <nav class="main-today">
            <ul>
                <li>
                    <i></i>
                    <span>fdsfdsfdsfds</span>
                    <p>fdsfdfdsafdsafdasfdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdasfdsafdsafdsafdasfdasfdasfdasfdsafds</p>
                </li>

                <li>
                    <i></i>
                    <span>fdsfdsfdsfds</span>
                    <p>fdsfdfdsafdsafdasfdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdsafdasfdsafdsafdsafdasfdasfdasfdasfdsafds</p>
                </li>
            </ul>
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
    ul {
        li {
            width: 100%;
            margin: 16px 0;
            border-radius: 2px;
            box-sizing: border-box;
            background-color: #fff;
            i {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                float: left;
                background-color: #000;
            }
            span {
                display: block;
            }
            p {
                display: block;
                word-wrap: break-word;
            }
        }
    }
}
</style>