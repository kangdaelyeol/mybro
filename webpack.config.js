const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'deployment',
	watch: true,
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.css',
		}),
	],
	entry: path.resolve(__dirname, 'src/client/main.js'),
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: 'js/main.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [['@babel/preset-env', { targets: 'defaults' }]],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
};
