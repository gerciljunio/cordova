import Vue from 'vue'
import Router from 'vue-router'
import MainRedirects from '@/components/MainRedirects'
import Signs from '@/components/Signs'
import Main from '@/components/App/Main'
import AppHello from '@/components/App/Hello'

Vue.use(Router)

export default new Router({
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
			path: '/app/',
			name: 'Main',
			component: Main,
			children: [
				{
					path: '/',
					name: 'AppHello',
					component: AppHello
				},
			]
		}
	]
})
