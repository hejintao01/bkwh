<template>
<div class="ord">
    <Tab></Tab>
    <div v-for="item in imgstatus" :key="item.id" class="card"> 
        <div class="sts" >
            <wx-image class="stsimgbox" :src="item.img" mode="aspectFit"></wx-image>
        </div>
        <div class="cbox">
            <span class="cleft">订单号:</span>
            <span class="cright">{{item.id}}</span>
        </div>
        <div class="cbox">
            <span class="cleft">项目编号:</span>
            <span class="cright">{{item.ino}}</span>
        </div>
        <div class="cbox">
            <span class="cleft">物料编号:</span>
            <span class="cright">{{item.mno}}</span>
        </div>
        <div class="cbox">
            <span class="cleft">送货地址:</span>
            <span class="cright">{{item.arrive}}</span>
        </div>
        <div class="cbox">
            <span class="cleft">送达地址:</span>
            <span class="cright">{{item.saddress}}</span>
        </div>
        <div v-if="item.status == 1 && item.type=='承运商'" class="cbtnbox">
            <wx-button class="cbtn">取消预约</wx-button>
        </div>
        <div v-if="item.status != 1 && item.type=='承运商'" class="subbtnbox">
            <wx-button class="subbtn" @click="onclickdetail(item)">预约</wx-button>
        </div>
    </div>
    <div v-if="post[0].type=='承运商'" class="osearch" @click="changeshow">
        <img class="iconsearch" @click="changeshow" src="https://lmsqas.whchem.com/myscm/web2/img_wechat/query.png">
    </div>

    <div class="modal-mask"  v-if="showmdal" >
        <Screencon @tap="preventTouchMove"></Screencon>
    </div>
</div>
</template>

<script>
import Tab from '../common/tab.vue'
import Screencon from '../common/Screeningconditions.vue'
export default {
    name : 'CarrierOrder',

    components:{
        Tab,
        Screencon
    },
    
    data(){
        return{
            post:[

                {id:'23456',ino:'test',mno:'333',arrive:"sad333asd",saddress:"we3we3qwe",status:2,type:'承运商'},
                {id:'23456',ino:'test',mno:'333',arrive:"sad333asd",saddress:"we3we3qwe",status:1,type:'承运商'},
                {id:'23456',ino:'test',mno:'333',arrive:"sad333asd",saddress:"we3we3qwe",status:2,type:'承运商'},
                {id:'23456',ino:'test',mno:'333',arrive:"sad333asd",saddress:"we3we3qwe",status:1,type:'承运商'},
               
            ],
            isshow:false,
            showmdal:false,
        }
    },
    computed:{
        imgstatus(){
            this.post.forEach(el => {
                if(el.status==1){
                    el.img = 'https://lmsqas.whchem.com/myscm/web2/img_wechat/orderno.png'
                }else{
                    el.img = 'https://lmsqas.whchem.com/myscm/web2/img_wechat/orderyes.png'
                }
            });
            console.log('ss',this.post)
            return this.post
        }
    },
    created(){

        window.addEventListener('wxload', () => {
			console.log('page2 wxload')
			wx.setNavigationBarTitle({
      			title: '预约列表'  //修改title
			})
		})
    },
    methods:{
        changeshow(){
            this.isshow = true
            this.showmdal=true
        },
        onclickdetail(item){
            window.open('/CarrierOrder/'+item.id)
        },
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
    width: 360px;
    height: 235px;
    margin: 10px auto;
    border-radius: 4px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.sts{
    height: 30px;
    width: 50px;
    position: absolute;
    right: 0;
    top:0;
    margin:2px 5px 0 0;
    transform:translate(-50% -50%);
    /* background: url(https://lmsqas.whchem.com/myscm/web2/img_wechat/orderno.png) no-repeat; */
}
.stsimgbox{
    height: 30px;
    width: 50px;
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
    margin-right: 10px;
    margin-bottom: 100px;
    position: fixed;
    right: 0;
    bottom: 0;
    background: url(https://lmsqas.whchem.com/myscm/web2/img_wechat/query.png) no-repeat;
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.iconsearch{

}

</style>