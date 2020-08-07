import Request from '../static/js/request.js';
let request = new Request().http



export default {
	getJobList: function () {
		return request('/jobList',{},'GET')
	}
}