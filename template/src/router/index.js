window.appConfig = require('../config/app')

import Vue from 'vue'
import Router from 'vue-router'
import MainRedirects from '@/components/MainRedirects'
import Signs from '@/components/Signs'
import Main from '@/components/App/Main'
import AppHello from '@/components/App/Hello'

Vue.use(Router)

export default new Router({
	mode: typeof(window.appConfig.historyMode) !== 'undefined' && window.appConfig.historyMode ? 'history' : '',
	routes: [
		{
			path: '/',
			name: 'MainRedirects',
			component: MainRedirects
		},
		{
			path: '/signs',
			name: 'Signs',
			component: Signs
		},
		{
			path: typeof(window.appConfig.appId) !== 'undefined' && window.appConfig.appId ? '/app/:id/' : '/app/',
			component: Main,
			children: [
				{
					path: '/',
					name: 'MainAppHello',
					component: AppHello
				},
			]
		}
	]
})
