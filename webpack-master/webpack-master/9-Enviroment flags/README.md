# Enviroment flags
通过环境标志来使代码只能在生产环境运行

    var webpack = require('webpack');

	var devFlagPlugin = new webpack.DefinePlugin({
	  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
	});
	
	module.exports = {
	  entry: './main.js',
	  output: {
	    filename: 'bundle.js'
	  },
	  plugins: [devFlagPlugin]
	};
然后进CMD开启DEBUG=true

    set DEBUG=true
    webpack-dev-server（npm start）就可以了