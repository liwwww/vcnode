<template>
    <div class="release-btn"  @click="navBtn">
        <div class="navbar" :class="{navbarClick: isClick}">
			<ul class="menu" :class="{navbarShow: isClick}">
                <slot></slot>			
			</ul>
		</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isClick: false
        }
    },
    methods: {
        navBtn (){
            this.isClick = !this.isClick;
        }
    }

}
</script>

<style scoped lang="less">
.release-btn {
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    margin: 30px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    background: #409EFF;
    box-shadow: -2px 3px 12px rgba(0, 0, 0, .23), 0 10px 40px rgba(0, 0, 0, .19);
    z-index: 10;
    &:after {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 16px;
        height: 1px;
        background-color: #fff;
        z-index: 11;
    }
    &:before {
        position: absolute;
        display: inline-block;
        content: '';
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 1px;
        height: 16px;
        background-color: #fff;
        z-index: 11;
    }
}
.navbar{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
		cursor: pointer;
        text-align: center;
	}
	.navbar .menu{
		display: inline-block;
		list-style: none;
		padding: 0;
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: default;
		border-radius: 50%;
		transition: transform 1.4s 0.07s;
		z-index: -1;
    }
	.navbarClick .menu{
		transition: transform 0.4s 0.08s, z-index   0s  0.5s;
		transform: scale(1);
		z-index: 1;
	}
	.navbar .menu li{
		display:  inline-block;
		position: absolute;
		transform-origin: 100px;
        transition: all 0.5s 0.1s;
	}
	.navbarClick .menu li{
		transition: all 0.6s;
    }
    .navbarShow li a{
        background: #409EFF;
    }
	.navbar .menu li a{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		position: absolute;
        transition: 0.6s;
	}
	.navbarClick .menu li:nth-child(1){
		transition-delay: 0.12s;
		transform: translateY(-10px);
	}
	.navbarClick .menu li:nth-child(1) a{
		transition-delay: 0.24s;
		transform: translateY(-45px);
	}
	.navbarClick .menu li:nth-child(2){
		transition-delay: 0.14s;
		transform: translateY(-60px);
	}
	.navbarClick .menu li:nth-child(2) a{
		transition-delay: 0.28s;
		transform: translateY(-50px);
	}
	.navbarClick .menu li:nth-child(3){
		transition-delay: 0.16s;
		transform: translateY(-110px);
	}
	.navbarClick .menu li:nth-child(3) a{
		transition-delay: 0.32s;
		transform: translateY(-55px);
	}
</style>