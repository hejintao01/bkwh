<template>
    <div class="eval_div">
		<div class="evaltext_content" :style="{height: isshow?'150px':'50px'}">
            <div class="text_top">
                <div class="eval_txt">{{txt}}</div>
                <div class="eval_of">
                    <div class="switch_content" @click="changeSwitch">
                        <span class="switch" :class="{'checked':checked}" :style="{backgroundColor:checked?'#13ce66':'#dcdfe6',baorderColor:checked?'#13ce66':'#dcdfe6'}"></span>
                    </div>
                </div>
            </div>
            <div class="text_content" v-if="isshow">
               <textarea maxlength="100"  placeholder="写下您的评价吧~" auto-height="true" class="eval_textarea" v-model="textarea" @blur="getTextarea"></textarea>
            </div>
		</div>
	</div>
</template>

<script>
	export default {
        name: 'EvalText',
        props: ['txt','textarea'],
        data(){
            return{
                isshow:true,
                showtxt:false,
                checked:true,
            }
        },
        created(){
            // if(this.textarea!=null||this.textarea!=undefined){
                // this.isshow = false
            // }
        },
        methods:{
            getTextarea(){
                 this.$nextTick(() => {
                   this.$emit('getTextarea', this.textarea)
                });
            },
            changeSwitch(){
                this.checked = !this.checked
                if(this.checked){
                    this.isshow = true
                    this.textarea = null
                    this.$emit('getTextarea', this.textarea)
                }else{
                    this.isshow = false
                    this.textarea = ""
                    this.$emit('getTextarea', this.textarea)
                }
            }
        },
        watch:{
            textarea(newVal,oldVal){
                console.log(newVal,oldVal)
                this.textarea = newVal
            }
        }
	}
</script>

<style lang="less">
	.eval_div {
		margin-bottom: 20px;
		width: 100%;
	}
	.evaltext_content {
        height: 150px;
        // display: flex;
        // align-items: center;
        // flex-direction:column
	}
    .text_top{
        display: flex;
        padding-top: 10px;
        justify-content: space-between;
        // flex: 1;
    }
    .eval_of{
        flex: 2;
        text-align: right;
        margin-right: 20px;
    }
    .switch_content{
            display: inline-flex;
        align-items: center;
        position: relative;
        height: 20px;
        vertical-align: middle;
    }
    .switch{
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
    }
    .checked.switch::after{
        left: 100%;
        margin-left: -17px;
    }
    .switch::after{
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
	.eval_txt {
        flex: 3;
		color: #000000;
		margin-left: 20px;
        word-break: break-all;
        font-size: 18px;
    }
    .text_content{
        width: 100%;
        // flex: 3;
        // display: flex;
        // justify-content: space-between;
        padding: 10px 5% 20px;
    }
    .eval_textarea{
        border: 1px solid #e5e5e5;
        width: 85%;
        padding: 15px 10px;
        background: #f5f5f5;
        min-height: 50px;
    }
</style>
