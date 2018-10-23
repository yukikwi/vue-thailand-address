import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';

import Home from './views/Home.vue';

Vue.use(Router);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/get-started',
		name: 'get-started',
		component: () =>
			import(/* webpackChunkName: "get-started" */ './views/GetStarted.vue')
	},
	{
		path: '/api',
		name: 'api',
		component: () =>
			import(/* webpackChunkName: "api" */ './views/API.vue'),
		children: [
			{
				path: '',
				name: 'api-index',
				component: () =>
					import(/* webpackChunkName: "api-index" */ './views/API/Index.vue')
			},
			{
				path: 'subdistrict',
				name: 'api-subdistrict',
				component: () =>
					import(/* webpackChunkName: "api-subdistrict" */ './views/API/Subdistrict.vue')
			},
			{
				path: 'district',
				name: 'api-district',
				component: () =>
					import(/* webpackChunkName: "api-district" */ './views/API/District.vue')
			},
			{
				path: 'province',
				name: 'api-province',
				component: () =>
					import(/* webpackChunkName: "api-province" */ './views/API/Province.vue')
			},
			{
				path: 'zipcode',
				name: 'api-zipcode',
				component: () =>
					import(/* webpackChunkName: "api-zipcode" */ './views/API/Zipcode.vue')
			},
			{
				path: 'address-model',
				name: 'api-address-model',
				component: () =>
					import(/* webpackChunkName: "api-address-model" */ './views/API/AddressModel.vue')
			},
			{
				path: 'datastore',
				name: 'api-datastore',
				component: () =>
					import(/* webpackChunkName: "api-datastore" */ './views/API/DataStore.vue')
			}
		]
	}
];

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'is-active',
	routes
});
