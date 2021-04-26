<template>
	<div class="buttondiv">
		<img class="buttonimg" :src="srcimg" catchTap="chooseImageTap"
		 mode="aspectFit" />
		<div class="buttonspan">{{title}}</div>
	</div>
</template>

<script>
	export default {
		name: 'ButtonIcon',
		props: ['title','srcimg'],
	}
</script>

<style lang="less">
	.buttondiv {
		float: left;
		height: 100px;
		line-height: 100px;
		width: 48%;
		background-color: #FFFFFF;
		margin: 10px 1%;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
		border-radius: 6px;
	}

	.buttonimg {
		height: 50px;
		width: 50px;
		vertical-align: middle;
		margin-left: 10px;
	}

	.buttonspan {
		display: inline-block;
		color: #282828;
		font-weight: bold;
	}
</style>
