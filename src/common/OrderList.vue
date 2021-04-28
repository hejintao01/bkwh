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

</style>
