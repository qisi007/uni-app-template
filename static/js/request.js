// uni-app请求封装

export default class Request {
	http (router,data={},method) {
		// 基础地址
		let path = 'http://mock.allhome.com.cn/mock/5c91b03a2add03001024c420/uni';
		// 返回promise
		return new Promise((resolve,reject) => {
			// 请求
			uni.request({
				url: `${path}${router}`,
				data: data,
				method:method,
				success: (res) => {
					// 将结果抛出
					resolve(res.data)
				}
			})
		})
		
		
	}
}