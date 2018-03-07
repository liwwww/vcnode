<template>
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
</template>

<script>
import vContent from '../components/content';

    export default {
        components: { vContent }
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
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                background-color: #000;
            }
            span {
                display: block;
            }
            p {
                display: block;
            }
        }
    }
}
</style>