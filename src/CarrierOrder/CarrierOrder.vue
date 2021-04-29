<template>
<div class="ord">
    <!-- <wx-scroll-view style="height:100%;width:100%;top:0;left:0;position:absolute;z-index: 0;"
     scroll-y="true"   refresher-default-style="white" refresher-enabled="true" refresher-background="lightgreen" 
    refresher-threshold="1"  refresher-triggered="false" > -->
    <!-- 标题导航栏 -->
    <Tab @changelist="changeshowlist"></Tab>
    <!-- 列表展示 -->
    <Orderlist  @tap="preventTouchMove" v-bind:postlist="showlist" @changeparsts="stscancel" :usertype="idtype"></Orderlist>
    <!-- 弹窗 -->
    <div class="modal-mask" v-if="showmdal">
        <Screencon @tap="preventTouchMove"></Screencon>
    </div>
    <!-- </wx-scroll-view> -->
</div>
</template>

<script>
import Tab from '../common/tab.vue'
import Screencon from '../common/Screeningconditions.vue'
import Orderlist from '../common/OrderList.vue'
export default {
    name : 'CarrierOrder',
    data(){
        return{
            post:[
                {id:'PS-20210000001',ino:'TS-2021000001',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:2,type:'承运商'},
                {id:'PS-20210000002',ino:'TS-2021000002',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:1,type:'承运商'},
                {id:'PS-20210000003',ino:'TS-2021000003',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:2,type:'承运商'},
                {id:'PS-20210000004',ino:'TS-2021000004',mno:'WS-00000333',arrive:"浙江省杭州市",saddress:"浙江省杭州市",status:1,type:'承运商'},
            ],
            showlist:[],
            tabsts:3,
            idtype:'承运商',
            showmdal:false
        }
    },
    components:{
        Tab,
        Screencon,
        Orderlist
    },
    created(){
        window.addEventListener('wxload', () => {
			wx.setNavigationBarTitle({
      			title: '预约列表'  //修改title
			})
            this.showlist = this.post
		})
        window.addEventListener("pulldownrefresh", (evt) => {
            const that = this
            that.changeshowlist(that.tabsts)
            wx.stopPullDownRefresh();
        })
        
    },
    methods:{
        preventTouchMove(e){
            this.showmdal = e
        },
        updatelist(e){
            const that = this
            if(e == 3){
                that.showlist = that.post
            }else{
                that.post.forEach(el =>{
                    if(e == el.status){
                        that.showlist.push(el)   
                    }
                })
            }  
        },
        changeshowlist(sts){
            const that = this
            that.tabsts = sts
            that.showlist = []
            that.updatelist(sts)
        },
        stscancel(listid){
            this.showlist.forEach(el=>{
                if(listid==el.id){
                    el.status =2
                }                
                })
                return this.showlist
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
.yscroll{
    height: 40px;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
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

</style>