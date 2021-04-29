<template>
<div>
    <div v-for="item in postlist" :key="item.id" class="card"> 
        <div v-if="item.status==1" class="sts" >
            <div class="stsyes">已预约</div>
        </div>
        <div v-else class="sts">
            <div class="stsno">未预约</div>
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
            <wx-button class="cbtn" @click="changests(item.id)">取消预约</wx-button>
        </div>
        <div v-if="item.status != 1 && item.type=='承运商'" class="subbtnbox">
            <wx-button class="subbtn" @click="onclickdetail(item.id)">预约</wx-button>
        </div>
    </div>
    <div v-if="usertype=='承运商'" class="osearch" @click="changeshow">
        <wx-image class="iconsearch" @click="changeshow" src="https://lmsqas.whchem.com/myscm/web2/img_wechat/query.png" mode="aspectFit"></wx-image>
    </div>
</div>
</template>

<script>
	export default {
		name: 'Orderlist',
		data(){
			return{
			}
		},
        props:['postlist','usertype'],
		methods:{
			onclickdetail(item){
        		window.open('/CarrierOrder/'+item.id)
        	},
			changests(e){
                this.$emit('changeparsts',e)
			},
            changeshow(){
                this.$emit('tap',true)
            },
		}
	}
</script>

<style>
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
    display: flex;
    margin: 15px 0px 10px 0;
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
