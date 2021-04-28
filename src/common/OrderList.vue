<template>
<div>
    <div v-for="item in post" :key="item.id" class="card"> 
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
    <div v-if="post[0].type=='承运商'" class="osearch" @click="changeshow">
        <wx-image class="iconsearch" @click="changeshow" src="https://lmsqas.whchem.com/myscm/web2/img_wechat/query.png" mode="aspectFit"></wx-image>
    </div>
</div>
</template>

<script>
	export default {
		name: 'Orderlist',
		data(){
			return{
				post:[
                {id:'PS-20210000001',ino:'TS-2021000001',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:2,type:'承运商'},
                {id:'PS-20210000002',ino:'TS-2021000002',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:1,type:'承运商'},
                {id:'PS-20210000003',ino:'TS-2021000003',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:2,type:'承运商'},
                {id:'PS-20210000004',ino:'TS-2021000004',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:1,type:'承运商'},
            ],
			}
		},
		methods:{
			onclickdetail(item){
        		window.open('/CarrierOrder/'+item.id)
        	},
			changests(e){
                this.post.forEach(el=>{
                    if(e==el.id){
                        el.status =2
                    }                
                })
                return this.post
			},
            changeshow(){
                this.$emit('tap',true)
            },
		}
	}
</script>

<style>

</style>
