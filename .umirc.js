
// // ref: https://umijs.org/config/
// export default {
// 	treeShaking: true,
// 	routes: [
// 		{
// 			path: '/',
// 			component: '../layouts/index',
// 			routes: [
// 				{ path: '/', component: '../pages/index' }
// 			]
// 		}
// 	],
// 	plugins: [
// 		// ref: https://umijs.org/plugin/umi-plugin-react.html
// 		['umi-plugin-react', {
// 			antd: false,
// 			dva: true,
// 			dynamicImport: false,
// 			title: 'manage-system',
// 			dll: false,

// 			routes: {
// 				exclude: [
// 					/models\//,
// 					/services\//,
// 					/model\.(t|j)sx?$/,
// 					/service\.(t|j)sx?$/,
// 					/components\//,
// 				],
// 			},
// 		}],
// 	],
// }
// ref: https://umijs.org/config/
export default {
	treeShaking: true,

	plugins: [
		// ref: https://umijs.org/plugin/umi-plugin-react.html
		[
			'umi-plugin-react',
			{
				antd: true,
				routes: {
					exclude: [
						/models\//,
						/services\//,
						/model\.(t|j)sx?$/,
						/service\.(t|j)sx?$/,
						/components\//,
						/common\.fun\.js$/,
					],
				},
				dva: true,
				dynamicImport: false,
				title: 'umi',
				dll: false,
			},
		],
	],
};