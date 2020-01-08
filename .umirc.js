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