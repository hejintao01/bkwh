<template>
<div class="ord">
    <Tab></Tab>
    <Orderlist @tap="preventTouchMove"></Orderlist>
    <div class="modal-mask" v-if="showmdal" >
        <Screencon @tap="preventTouchMove"></Screencon>
    </div>
</div>
</template>

<script>
import Tab from '../common/tab.vue'
import Screencon from '../common/Screeningconditions.vue'
import Orderlist from '../common/OrderList.vue'
export default {
    name : 'CarrierOrder',

    components:{
        Tab,
        Screencon,
        Orderlist
    },
    
    data(){
        return{
            showmdal:false
        }
    },
    created(){
        wx.startPullDownRefresh()
        window.addEventListener('wxload', () => {
			wx.setNavigationBarTitle({
      			title: '预约列表'  //修改title
			})
		})
    },
    methods:{
        preventTouchMove(data){
            this.showmdal = data
        }
    }
}
</script>

<style>
.ord{
    margin: 0;
    padding: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.modal-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    margin: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 9000;
}
.card{
    position: relative;
    /* width: 360px;
    height: 235px; */
    margin: 0px 5px 10px 5px;
    border-radius: 4px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.sts{
    height: 34px;
    width: 54px;
    position: absolute;
    right: 5px;
    top:2px;
    transform:translate(-50% -50%);
}

.stsyes{
    /* margin: 0 6px; */
    text-align: center;
    height: 24px;
    width: 54px;
    font-size: 14px;
    position: relative; 
    color: #FFFFFF;
    line-height: 30px;
    background-color: #699F2A;
}
.stsyes::before{
    content: "";
    position: absolute;
    top: 24px;
    right: 0;
    border-left: 26px solid transparent;
    border-right: 26px solid transparent;
    border-top: 10px solid #699F2A;
}
.stsno{
    /* margin: 0 6px; */
    text-align: center;
    height: 24px;
    width: 54px;
    font-size: 14px;
    position: relative; 
    color: #FFFFFF;
    line-height: 30px;
    background-color: #F5A623;
}
.stsno::before{
    content: "";
    position: absolute;
    top: 24px;
    right: 0;
    border-left: 26px solid transparent;
    border-right: 26px solid transparent;
    border-top: 10px solid #F5A623;
}
.cbox{
    flex:1;
    display: flex;
    margin: 10px 10px 0 0;
}
.cleft{
    width: 80px;
    font-size: 16px;
    color: #787B80;
    margin-left: 10px;
}
.cright{
    flex: 1;
    font-size: 16px;
    color: #1E1E1F;
}
.cbtnbox{
    flex:1;
    margin: 20px 10px 20px 0;
    width: 80px;
    height: 35px;
    align-self: flex-end;
    background-color: #F5F9ff;
    border: 1PX solid #1B5EC8;
    box-shadow: 0 1px 4px 0 rgba(11, 50, 114, 0.40);
    border-radius: 4px;
}
.cbtn{
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    color: #1B5EC8;
    
}
.subbtnbox{
    flex:1;
    margin: 20px 10px 20px 0;
    width: 80px;
    height: 35px;
    align-self: flex-end;
    background-color: #1B5EC8;
    box-shadow: 0 1px 4px 0 rgba(11, 50, 114, 0.40);
    border-radius: 4px;
}
.subbtn{
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    color: #FFFFFF;
    
}
.osearch{
    position: fixed;
    right: 5px;
    bottom: 100px;
    /* width: 45px;
    height: 45px; */
    border-radius: 50%;
}
.iconsearch{
    width: 38px;
    height: 40px;
}

</style>