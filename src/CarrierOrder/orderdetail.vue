<template>
	<div>
		<div class="topcontainer">
			<div class="main-infor">
				<span class="firstinfor">预约信息</span>
			</div>
			<div class="se-infor">
				<span class="secondinfor">订单号</span>
				<span class="thirdinfor">213213213213213</span>
			</div>
			<div class="se-infor">
				<span class="secondinfor">提货日期</span>
				<wx-picker mode="date" :value="pickday"  class="thirdinfor" @change="changepickday($event)">
					{{pickday}}
				</wx-picker>
				<!-- <wx-picker mode="date" class="thirdinfor" :value="pickday" @change="changepickday($event)">
					{{pickday}}
				</wx-picker> -->
			</div>
			<div class="end-infor">
				<span class="secondinfor">时间段</span>
				<wx-picker mode="selector" :value="daytype" :range="daytypename" class="thirdinfor" @change="changedaytype($event)">
					{{daytype}}
				</wx-picker>
			</div>
		</div>
		<Subsection></Subsection>
		<div class="sbottom">
        <wx-button class="ssubmit" @click="submit"> 确&#12288认</wx-button>
    	</div>
		<div class="modal-mask"  v-if="showmdal" >
        	<Orderfail @tap="preventTouchMove"></Orderfail>
    	</div>
	</div>
</template>

<script>
	import Orderfail from '../common/Orderfail.vue'
	import Subsection from '../common/Timelist.vue'
	export default {
		name: 'Orderdetail',
		components: {
			Orderfail,
			Subsection
		},
		data: function() {
			return {
				pickday:'请选择',
				daytype:'全天',
				daytypename:['全天','上午','下午'],
				showmdal:false,
				}
	
		},
		methods:{
			submit(){
            	this.showmdal=true
			},
			preventTouchMove(data){
            	this.showmdal = data
        	},
			changedaytype(e){
				const that = this;
            	that.daytype = that.daytypename[e.target.value];
			},
			changepickday(e){
				console.log(e);
				const that = this;
            	that.pickday = e.detail.value;
			}
		}
	}
</script>

<style>
	body {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #7f7f7f;
		margin-top: 30px;
	}

	.topcontainer {
		background-color: #FFFFFF;
		margin: 10px;
		height: 195px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.main-infor{
		border-bottom: 2px solid #E6E6E6;
		flex: 1;
		margin: 0 10px;
	}
	.firstinfor{
		width: 85px;
		height: 46px;
		margin: 8px 0;
		line-height: 46px;
		font-size: 16px;
		color: #191919;
		font-weight: bold;
	}
	.se-infor{
		border-bottom: 1px solid #E6E6E6;
		flex: 1;
		margin: 0 10px;
		display: flex;
	}
	.end-infor{
		border-bottom: 1px solid #E6E6E6;
		flex: 1;
		margin: 0 10px 15px 10px;
		display: flex;
	}
	.secondinfor{
		width: 85px;
		height: 46px;
		line-height: 46px;
		font-size: 16px;
		color: #434547;
	}
	.thirdinfor{
		flex: 1;
		line-height: 46px;
		font-size: 16px;
		color: #787B80;
	}
</style>
