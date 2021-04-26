<template>
	
	<div class="tab_status">	
		<div :class="[{active: changecol == '1' },{stitle: changecol != '1'}]"  @click="changetab('1')">全部</div>	
		<div :class="[{active: changecol == '2' },{stitle: changecol != '2'}]"  @click="changetab('2')">未预约</div>	
		<div :class="[{active: changecol == '3' },{stitle: changecol != '3'}]"  @click="changetab('3')">已预约</div>		
	</div>
</template>

<script>
export default {
    name : 'Tab',
	data(){
		return {
			changecol :'1'
		}
	},
	methods:{
		changetab(status){
			const that = this
			console.log("当前状态是：" + status)
			that.changecol = status
		}
	}
}
</script>

<style>
.tab_status{
	display: flex;
	height: 40px;
	width: 340px;
	margin: 14px auto 10px auto;
	justify-content: center;
	align-items: center;
	/* border: 1px solid #1b5ec8; */
	background-color: #E9ECF2;
	border: 1px solid #13489D;
	border-radius: 4px;
}
.active {
	flex:1;
	color: #FFFFFF;
	background-color: #13489d;
	height: 40px;
	font-size: 18px;
	line-height: 40px;
	text-align: center;
	border-left: 1px solid #13489d;
}
.stitle{
	flex:1;
	background-color: #FFFFFF;
	color: #13489d;
	height: 40px;
	font-size: 18px;
	line-height: 40px;
	text-align: center;
	border-left: 1px solid #13489d;
}

</style>