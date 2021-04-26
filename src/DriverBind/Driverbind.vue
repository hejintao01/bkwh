<template>
<div class="all">
    <div class="ltop">
        <img src="https://lmsqas.whchem.com/myscm/web2/img_wechat/logo.png">
    </div>
    <div class="mid">
        <div class="inform"> 
            <span class="inform_t">手机号码</span>
            <input class="inform_v" type="number" placeholder="请输入有效手机号" v-model="phone" maxlength="11" @blur="phonecheck">
        </div>
        <div class="inform"> 
            <span class="inform_t">身份证号</span>
            <input class="inform_v" type="idcard" placeholder="输入正确身份证号" maxlength="18">
        </div>
        <div class="inform"> 
            <span class="inform_t">验证码</span>
            <input class="inform_v" placeholder="输入验证码"  >
            <wx-button class="inform_c" >获取验证码</wx-button>
        </div>
    </div> 
    <div class="dbottom">
        <wx-button class="dsubmit" @click="open"> 绑&#12288&#12288&#12288定</wx-button>
    </div>
</div>
</template>

<script>
export default {
    name : 'DriverBind',
    data(){
        return {
            phone:'',
        }
    },
    created(){
        window.addEventListener('wxload', () => {
			console.log('page2 wxload')
			wx.setNavigationBarTitle({
      			title: '司机绑定'  //修改title
			})
		})
    },
    methods:{
        open(){
            window.open('/SuccessBind')
        },
        phonecheck(e){
            this.phone = e.detail.value;
            this.phone = phone
            if (!(/^1[34578]\d{9}$/.test(e.detail.value))) {
            
              console.log(phone.length)
              if (phone.length >= 11) {
                wx.showToast({
                  title: '手机号有误',
                  icon: 'none',
                  duration: 1000
                })
              }
            } else {
              this.setData({
                phonecheck: true
              })
            }
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
.inform_c{
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