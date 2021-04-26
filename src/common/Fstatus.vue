<template>
	<div class="statusdiv" :class="classObject">
		<div class="borderstatus"></div>
		<div class="fstatus">{{ status }}</div>
	</div>
</template>

<script>
	export default {
		name: 'Fbutton',
		props: ['status'],
		computed: {
			classObject: function() {
				return {
					'sure_status': this.status == '已确认'||this.status == '已签到',
					'unsign_status': this.status == '未签到',
					'unqueue_status': this.status == '未预约',
					'finish_status': this.status == '已完成',
					'finish_status': this.status == '已预约'
				}
			}
		}
	}
</script>

<style lang="less">
	.statusdiv {
		position: absolute;
		right: 0;
		top: 10px;
		text-align: right;
	}

	.fstatus {
		float: left;
		height: 20px;
		font-size: 12px;
		color: #FFFFFF;
		background-color: #FFFFFF;
		text-align: center;
		line-height: 20px;
	}

	.borderstatus {
		float: left;
		height: 0;
		width: 0;
		border-bottom: 10px solid #FFFFFF;
		border-right: 10px solid #FFFFFF;
		border-top: 10px solid transparent;
		border-left: 10px solid transparent;
	}

	.sure_status .fstatus {
		background-color: rgb(4, 172, 10);
	}

	.sure_status .borderstatus {
		border-bottom: 10px solid rgb(4, 172, 10);
		border-right: 10px solid rgb(4, 172, 10);
	}

	.unsign_status .fstatus {
		background-color: rgb(245, 119, 34);
	}

	.unsign_status .borderstatus {
		border-bottom: 10px solid rgb(245, 119, 34);
		border-right: 10px solid rgb(245, 119, 34);
	}

	.unqueue_status .fstatus {
		background-color: rgb(245, 34, 45);
	}

	.unqueue_status .borderstatus {
		border-bottom: 10px solid rgb(245, 34, 45);
		border-right: 10px solid rgb(245, 34, 45);
	}

	.finish_status .fstatus {
		background-color: rgb(114, 204, 87);
	}

	.finish_status .borderstatus {
		border-bottom: 10px solid rgb(114, 204, 87);
		border-right: 10px solid rgb(114, 204, 87);
	}
</style>
