<template>
	<div class="detail_div">
		<div class="detail_content" v-for="detail in post" >
			<span class="detail_name">{{detail.name}}:</span>
			<span class="detail_value">{{detail.value}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Detail',
		props: ['post'],
	}
</script>

<style lang="less">
	.detail_div {
		margin-bottom: 10px;
		width: 100%;
	}

	.detail_content {
		margin-bottom: 20px;
	}

	.detail_name {
		color: #7f7f7f;
	}

	.detail_value {
		color: #282828;
		margin-left: 10px;
		word-break: break-all;
	}
</style>
