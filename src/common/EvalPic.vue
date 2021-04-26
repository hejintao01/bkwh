<template>
    <div class="eval_div">
		<div class="eval_content">
            <div class="eval_left">
                <div class="eval_txt">{{txt}}</div>
            </div>
            <div class="eval_right">
                <div class="buttondiv" @click="changePic('1')"> 
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/chaping_b.png" v-if="select!='1'"/>
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/chaping.png" v-else/>
		            <div class="buttonspan">不满意</div>
	            </div>
                <div class="buttondiv" @click="changePic('2')">
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/zhongping _b.png" v-if="select!='2'"/>
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/zhongping.png" v-else/>
		            <div class="buttonspan">一般</div>
	            </div>
                <div class="buttondiv"  @click="changePic('3')">
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/haoping_b.png" v-if="select!='3'"/>
		            <img class="buttonimg" src="https://testwlapp.jiahua.com/images/haoping.png" v-else/>
		            <div class="buttonspan">满意</div>
	            </div>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
        name: 'EvalPic',
        props: ['txt','select'],
        methods:{
           changePic(id){
               this.select = id
               this.$emit('getSelect', this.select)
           }
        }
	}
</script>

<style lang="less">
	.eval_div {
		margin-bottom: 20px;
        width: 100%;
        background: #fff;
	}
	.eval_content {
        height: 100px;
        display: flex;
        align-items: center;
	}
    .eval_left{
        flex: 2;
    }
	.eval_txt {
		color: #000000;
		margin-left: 20px;
        word-break: break-all;
        font-size: 18px;
    }
    .eval_right{
        flex: 3;
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }
    .buttondiv {
        text-align: center;
        margin-right: 20px;
	}
	.buttonimg {
		height: 50PX;
		width: 50PX;
		vertical-align: middle;
	}
	.buttonspan {
        color: #6a6a6a;
        font-size: 14px;
        margin-top: 5px;
	}
</style>
