<template>
<div class="all">
    <div class="ltop">
        <img src="https://lmsqas.whchem.com/myscm/web2/img_wechat/logo.png">
    </div>
    <div class="mid">
        <div class="inform"> 
            <span class="inform_t">用户名</span>
            <input class="inform_v" placeholder="请输入用户名" >
        </div>
        <div class="inform"> 
            <span class="inform_t">密码</span>
            <input class="inform_v"  type="password" placeholder="输入正确密码" >
        </div>
        <div class="inform"> 
            <span class="inform_t">验证码</span>
            <input class="inform_v" placeholder="输入验证码"  v-model="lmscode">
            <wx-button class="lmscode" v-model="checkcode" @click="createcode">{{checkcode}}</wx-button>
        </div>
    </div> 
    <div class="dbottom">
        <wx-button class="dsubmit" @click="open(2)" hover-class="none"> 绑&#12288&#12288&#12288定</wx-button>
    </div>
</div>
</template>

<script>
export default {
    name : 'CarrierBind',
    data(){
        return {
            lmscode:'',
            checkcode:''
        }
    },
    created(){
        window.addEventListener('wxload', () => {
			console.log('page2 wxload')
			wx.setNavigationBarTitle({
      			title: '承运商绑定'  //修改title
			})
		})
        this.createcode()
    },
    methods:{
        open(){
            if(this.lmscode.toLowerCase() != this.checkcode.toLowerCase()){
                wx.showToast({
                    title:'验证码错误',
                    icon:'error',
                    duration:2000
                })
            }else{
            window.open('/SuccessBind')
            }
        },
        createcode(){
             //先清空验证码的输入
            this.code = "";
            this.checkcode = "";
            this.lmscode = "";
            //验证码的长度  
            var codeLength = 4; 
            //随机数 
            var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');  
            for(var i = 0; i < codeLength; i++) {
                //取得随机数的索引（0~35）
                var index = Math.floor(Math.random()*36);   
                //根据索引取得随机数加到code上
                this.code += random[index];   
            }
                //把code值赋给验证码  
                this.checkcode = this.code; 
      
        }
    }
}
</script>

<style>
@import url('../assets/css/normalize.css');
.all{
    overflow: hidden;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
}
img{
    margin: 0;
    padding: 0;
}
.ltop{  
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.ltop img{
    /* width: 100%;
    height: 200px; */
    width: 40%;
    background-size: 50% 50%
}
.mid{
    margin: 0px auto;
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inform{
    flex: 1;
    width: 330px;
    height: 46px;
    margin: 24px auto auto 0;
    display: flex;
    border-radius: 4px;
    align-items: center;
    background-color: #e9ecf2;
}
input{
    border-style: none;
}
.inform_t{
    height: 46px;
    width: 90px;
    line-height: 46px;
    font-size: 18px;
    margin-left: 12px;
    color: #333333;
}
.inform_v{
    flex:1;
    font-size: 16px;
    height: 46px;
    line-height: 46px;
}
.lmscode{
    flex:1;
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    color: #13489D;
    text-align: left;
    border-left: 1px solid #13489D;
}
.dbottom{
    width: 330px;
    height: 46px;
    margin: 60px auto;
    border-radius: 4px;
}
.dsubmit{
    height: 46px;
    color: #FFFFFF;
    text-align: center;
    font-weight: bold;
    line-height: 46px;
    font-size: 18px;
    background-color: #13489D;
}
</style>