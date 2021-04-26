<template>
	<div v-if="msgContent.description =='已结束'" :style="{'position':'relative','display':isActive ? 'none' : 'inline-block'}" :class="['subscribe-box',msgContent.subscribeCls]">
		<div class="subscribe-box-time">
			<span>{{ msgContent.timeZone }}</span>
		</div>
		<div>
			<button class="subscribe-btn">
				<div class="subscribe-box-btn">
					<span class="subscribe-description">{{ msgContent.description }}</span>
				</div>
			</button>
		</div>
	</div>
	<div v-else :class="['subscribe-box',msgContent.subscribeCls]" @click="clickToSubscribe">
		<div class="subscribe-box-time">
			<span>{{ msgContent.timeZone }}</span>
		</div>
		<div>
			<button class="subscribe-btn">
				<div class="subscribe-box-btn">
					<span class="subscribe-description">{{ msgContent.description }}</span>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SubcribeBox',
		props: {
			msgContent: {
				subscribeCls: 'Reseration',
				timeZone: '6:00-7:00',
				description: '预约'
			},
			hasSubscribed: {
				type: Array,
				default: () => []
			}
		},
		data: function() {
			return {
				timeZone: this.msgContent.timeZone,
				subscribed: this.hasSubscribed,
				isActive: true
			}
		},
		methods: {
			convertData() {
				this.$emit('getData', this.timeZone)
			},
			clickToSubscribe() {
				if (this.msgContent.subscribeCls != 'Full') {
					this.convertData();
				}
			}
		},
		watch: {
			hasSubscribed() {
				if (this.msgContent.subscribeCls != 'Full') {
					if (this.hasSubscribed.includes(this.timeZone)) {
						Object.assign(this.msgContent, {
							subscribeCls: 'Reseration',
							description: '预约'
						})
					} else {
						Object.assign(this.msgContent, {
							subscribeCls: 'Subscribe',
							description: '可预约'
						})
					}
				}
			}
		}
	}
</script>

<style>
	.isShow{
		display: none !important;
	}
	.subscribe-box {
		margin-bottom: 30px;
		width: 46%;
		display: inline-block;
	}

	.subscribe-box-time {
		box-sizing: border-box;
		height: 60px;
		line-height: 60px;
		width: 100%;
		font-size: 16px;
	}

	.subscribe-box-btn {
		height: 32px;
	}

	.subscribe-btn {
		display: block;
		text-align: center;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		border: none;
		outline: none;
	}

	.Reseration .subscribe-box-time {
		background-color: #EAF7ED;
		border: 3px solid #328B1E;
		color: #282828;
		font-size: 16px;
	}

	.Reseration .subscribe-box-btn {
		background-color: #328B1E;
		color: #ffffff;
		line-height: 32px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
	}

	.Subscribe .subscribe-box-time {
		background-color: #FFFFFF;
		border: 2px solid #6EB55D;
		color: #282828;
		font-size: 16px;
	}

	.Subscribe .subscribe-box-btn {
		background-color: #6EB55D;
		color: #ffffff;
		line-height: 32px;
		text-align: center;
		font-size: 16px;
	}

	.Full .subscribe-box-time {
		background-color: #FFFFFF;
		border: 2px solid #DEDEDE;
		color: #AEAEAE;
		font-size: 16px;
	}

	.Full .subscribe-box-btn {
		background-color: #DEDEDE;
		color: #AEAEAE;
		line-height: 32px;
		text-align: center;
		font-size: 16px;
	}
</style>
