<template>
	<button class="fbutton buttonsed" :class="classObject">{{title}}</button>
</template>

<script>
	export default {
		name: 'Fbutton',
		props: ['title', 'type', 'size'],
		computed: {
			classObject: function() {
				return {
					'primary_button': this.type === 'primary',
					'disable_button': this.type === 'disable',
					'warn_button': this.type === 'warn',
					'mini_button': this.size === 'mini',
				}
			}
		}
	}
</script>

<style lang="less">
	.fbutton.buttonsed {
		display: block;
		width: 100%;
		height: 34px;
		line-height: 30px;
		border-radius: 34px;
		font-size: 16px;
		letter-spacing: 10px;
		// background: -moz-linear-gradient(top,#0467dd,#0056a6);
		background: #ffffff;
		color: #025ec1;
		border: 2px solid #025ec1;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
		text-align: center;
		position: relative;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
	}

	.fbutton.mini_button {
		display: inline-block;
		min-width: 80px;
		width: auto;
		padding: 0 20px;
		letter-spacing: 3px;
	}

	.fbutton.primary_button {
		background: linear-gradient(#0467dd, #0056a6);
		// background: #0467dd;
		color: #fff;
	}

	.fbutton.disable_button {
		background: #7d7d7d;
		border: 2px solid #7d7d7d;
		color: #fff;
	}

	.fbutton.warn_button {
		background: linear-gradient(#e12828, #ba0000);
		border: 2px solid #ce1515;
		color: #fff;
	}
</style>
