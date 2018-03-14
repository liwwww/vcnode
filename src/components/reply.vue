<template>
    <div class="reply-box">
        <div class="reply-left">
            <img src="../components/user.png" alt="img" />
        </div>
        <div class="reply-list">
            <div class="reply-user">
                <div class="reply-msg">
                    <a>liwww</a>
                    <span>4小时前</span>
                </div>
            </div>
            <div class="reply-content">
                这是评论内容区
            </div>
            <p class="reply-tips">
                <span class="reply-tips-zan"></span>
                <span class="reply-tips-btn"></span>
            </p>
            <div class="reply-item-box">
                <div class="reply-item-list">
                    <div class="reply-item-content">
                        这是一条楼中楼
                    </div>
                    <div class="reply-item-msg">
                        ——liwwww · 1秒钟前
                    </div>
                </div>
                <div class="reply-item-form">
                    <div class="reply-item-textarea">
                        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="reply-item-btn">
                        <el-button>回复</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import '../commons/style/mixin.less';

.reply-box {
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    margin-top: 20px;
    padding: 15px 18px;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #fff;
    .mixin-screen-lg( {
        max-width: 1060px;
    }
    );
    .mixin-screen-md( {
        max-width: 700px;
    }
    );
    .mixin-screen-sm( {
        max-width: 460px;
    }
    );
}

.reply-left {
    float: left;
    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
}

.reply-list {
    padding-left: 47px;
    .reply-user {
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
        box-sizing: border-box;
        .reply-msg {
            a {
                font-weight: bolder;
            }
            a,
            span {
                vertical-align: middle;
                font-size: 13px;
            }
        }
    }
    .reply-content {
        font-size: 15px;
        line-height: 1.6;
        word-wrap: break-word;
        margin: 1.3em 0;
    }
    .reply-tips {
        height: 14px;
        width: 100%;
        background-color: #000;
    }
    .reply-item-box {
        position: relative;
        margin-top: 10px;
        font-size: 13px;
        background-color: #FAFAFA;
        padding: 0 10px;
        color: #666;
        overflow: hidden;
        .reply-item-list {
            font-size: 14px;
            padding: 10px 0 10px 40px;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.09);
            word-break: break-word;
            div {
                margin: 10px 0;
            }
        }
        .reply-item-form {
            width: 100%;
            box-sizing: border-box;
            .reply-item-textarea {
            padding-right: 100px;
                width: 100%;
            }
            .reply-item-btn {
                float: right;
            }
        }
    }
}
</style>