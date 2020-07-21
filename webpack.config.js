const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: __dirname + "/src/js/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "app.js"
	},
    mode: "development",
    devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: [
					/node_modules/
				]
			},
			{
				test: /\.(sass|scss)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader",
                    {
                        loader: `postcss-loader`,
                        options: {
                            plugins: [
                                require('cssnano')(),
                                require('postcss-cssnext')()
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader",
                    {
                        loader: `postcss-loader`,
                        options: {
                            plugins: [
                                require('cssnano')(),
                                require('postcss-cssnext')()
                            ]
                        }
                    }
                ]
            },
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			}
		]
	},
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        port: 8080,
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
};