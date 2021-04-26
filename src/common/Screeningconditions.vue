<template>
<div class="scrtop">
            <div class="scrtitle">
                <span class="scrtitle_v">筛选条件</span>
            </div>
            <div class="scrcondition">
                <span class="scrleft">交货单</span>
                <input class="scrright" placeholder="交货单号">
            </div>
            <div class="scrcondition">
                <span class="scrleft">提货点</span>
                <wx-picker mode="selector" class="scrright" :value='pick' :range="pickname" @change = "changename($event)"> 
                    <wx-view>{{pick}}</wx-view>       
                </wx-picker>
            </div>
            <div class="scrcondition">
                <span class="scrleft">品名</span>
                <wx-picker mode="selector" class="scrright" :value='pick' :range="pickname" @change = "changename($event)"> 
                    <wx-view >{{pick}}</wx-view>       
                </wx-picker>
            </div>
            <div class="scrcondition">
                <span class="scrleft">日期</span>
                <wx-picker mode="date" class="dateright" :value='stardate'  @change = "changesdate($event)"> 
                    <wx-view class="dateright">{{stardate}}</wx-view>       
                </wx-picker>
                <span class="datezhi">——</span>
                <wx-picker mode="date" class="dateright" :value='enddate'  @change = "changeedate($event)"> 
                    <wx-view class="dateright">{{enddate}}</wx-view>       
                </wx-picker>
            </div>
            <div class="scrbtn">
                <wx-button class="scrcbtn" @click="onCancal">取消</wx-button>
                <wx-button class="scrsbtn" @click="onCofrim">确认</wx-button>
            </div>
</div>
</template>
<script>

export default {
    name:'Screencon',
    data(){
        return {
            pickname:["提货点","卸货点"],
            pick:'提货点',
            stardate:'',
            enddate:'',   
        }
    },
    methods:{
        changename(e){
            const that = this;
            that.pick = that.pickname[e.target.value];
        },
        changesdate(e){
            const that = this;
            that.stardate = e.detail.value;
        },
        changeedate(e){
            const that = this;
            that.enddate = e.detail.value;
        },
        onCancal(){
            this.$emit('tap',false)
        },
        onCofrim(){
            this.$emit('tap',false)
        }
    }
}

</script>
<style>
.scrtop{
    position: fixed;
    background-color: #FFFFFF;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: 440px;
}
.scrtitle{
    height: 30px;
    width: 80px;
    margin: 35px auto 5px auto;
}
.scrtitle_v{
    text-align: center;
    font-size: 18px;
    color: #191919;
    font-weight: bold;
}
.scrcondition{
    width: 300px;
    height: 35px;
    display: flex;
    margin: 25px 20px 0 20px;
    justify-content: center;
    align-items: center;
}
.scrleft{
    flex: 1;
    font-size: 16px;
    color: #434547;
    font-weight: bold;
}
.scrright{
    height: 35px;
    width: 230px;
    line-height: 35px;
    font-size: 16px;
    color: #787B80;
    background-color: #FFFFFF;
    border: 1px solid #CFD5B8;
    border-radius: 2px;
}
.dateright{
    height: 35px;
    width: 110px;
    font-size: 16px;
    line-height: 35px;
    color: #787B80;
    background-color: #FFFFFF;
    border: 1px solid #CFD5B8;
    border-radius: 2px;
}
.datezhi{
    width: 10px;
}
.scrbtn{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px auto;
    width: 340px;
    height: 40px;
}
.scrcbtn{
    margin: auto 20px auto 20px;
    height: 40px;
    width: 135px;
    /* flex: 1; */
    background-color: #FFFFFF;
    border: 1px solid #1b5ec8;
    /* margin: auto 20px auto 20px; */
    box-shadow: 0 1px 4px 0 rgba(11, 50, 114, 0.40);
    border-radius: 4px;
    font-size: 18px;
    color: #1b5ec8;
    line-height: 40px;
    text-align: center;
}
.scrsbtn{
    /* flex: 1; */
    margin: auto 20px auto 5px;
    width: 135px;
    height: 40px;
    /* margin: auto 20px auto 5px; */
    background-color: #1b5ec8;
    box-shadow: 0 1px 4px 0 rgba(11, 50, 114, 0.40);
    border-radius: 4px;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: bold;
    line-height: 40px;
    text-align: center;
}
</style>
