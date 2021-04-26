<script>
	function getRequest(name, option) {
		let url = decodeURIComponent(option)
		let urlsearch = url.split("?")[1]
		let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		let r = urlsearch.match(reg);
		if (r != null) {
			return decodeURIComponent(r[2]);
		} else {
			return null;
		}
	}
	function requestGet(url,callback){
		wx.request({
			url: url,
			header: {
				'content-type': 'application/json' // 默认值
			},
			success(res) {
				if (!res.data.success) {
					console.log(res.data.message)
					wx.showToast({
					  title: res.data.message,
					  icon: 'none',
					  duration: 2000
					})
				}
				callback(res)
			}
		})
	}
	function requestPost(url,data,callback){
		wx.request({
			url: url,
			header: {
				'content-type': 'application/json' // 默认值
			},
			data:data,
			method: 'POST',
			success(res) {
				if (!res.data.success) {
					console.log(res.data.message)
					wx.showToast({
					  title: res.data.message,
					  icon: 'none',
					  duration: 2000
					})
				}
				callback(res)
			}
		})
	}
export default {
	getRequest,
	requestGet,
	requestPost
} 
</script>
