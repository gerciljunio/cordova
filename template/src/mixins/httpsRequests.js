export const httpsRequests = {
	methods: {
		httpGet: function(url, config) {
			return window.axios.get(url, config)
		},
		
		httpPost: function(url, data, config) {
			return window.axios.post(url, data, config)
		},
		
		httpDelete: function(url, config) {
			return window.axios.delete(url, config)
		},
		
		httpPut: function(url, data, config) {
			return window.axios.put(url, data, config)
		},
		
		httpRequest: function(config) {
			return window.axios.request(config)
		},
	}
};