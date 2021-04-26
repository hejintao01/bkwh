<template>
    <div class="midcontainer">
		<div class="main-infor">
			<span class="firstinfor">预约时段</span>
		</div>
		<div class="timelist">
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已约满</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle-subscribe">可预约</span>
				<span class="showtime-subscribe">07:00-08:00</span>
			</div>
			<div class="timebox-subscribe-focus">
				<span class="timetitle-subscribe-focus">可预约</span>
				<span class="showtime-subscribe-focus">07:00-08:00</span>
			</div>
			<div class="timebox-subscribe">
				<span class="timetitle-subscribe">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			<div class="timebox">
				<span class="timetitle">已结束</span>
				<span class="showtime">07:00-08:00</span>
			</div>
			
		</div>
	</div>
</template>
<script>

export default{
    name:'Subsection'
}
</script>

<style>
.midcontainer{
	height: 360px;
	margin: 10px;
	background-color: #FFFFFF;

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
.timelist{
	display: flex;
	flex-wrap: wrap;
    justify-content: space-between;
	margin: 15px 10px 20px 10px;
}
.timebox{
	max-width: 103px;
	height: 58px;
	flex: 1;
	background-color: #F7F7F7;
	border: 1px solid #D9D9D9;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between; 
	align-items: center;
	margin: 0px 0 15px 0;
}
/* 可预约盒子 */
.timebox-subscribe{
    max-width: 103px;
	height: 58px;
	flex: 1;
	background-color: #F7FAF5;
	border: 1px solid #699F2A;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 0px 0 15px 0;
}
.timebox-subscribe-focus{
    max-width: 103px;
	height: 58px;
	flex: 1;
	background-color: #F7FAF5;
	border: 1px solid #417505;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 0px 0 15px 0;
}
.timetitle{
	background-color: #E9ECF2;
	text-align: center;
	line-height: 24px;
	width: 105px;
	height: 24px;
	font-size: 14px;
	color: #676767;
}
/* 可预约标题 */
.timetitle-subscribe{
    background-color: #699F2A;
	text-align: center;
	line-height: 24px;
	width: 105px;
	height: 24px;
	font-size: 14px;
	color: #FFFFFF;
}
.timetitle-subscribe-focus{
    background-color: #417505;
	text-align: center;
	line-height: 24px;
	width: 105px;
	height: 24px;
	font-size: 14px;
	color: #FFFFFF;
    font-weight: bold;
}
.showtime{
	flex: 1;
	line-height: 36px;
	font-size: 14px;
	color: #676767;
}
/* 可预约时间 */
.showtime-subscribe{
    flex: 1;
	line-height: 36px;
	font-size: 14px;
	color: #424242;
}
.showtime-subscribe-focus{
    flex: 1;
	line-height: 36px;
	font-size: 14px;
	color: #424242;
    font-weight: bold;
}
</style>