# Hot Module Replacement热加载
You have two ways to enable Hot Module Replacement with the webpack-dev-server.

(1) Specify --hot and --inline on the command line

$ webpack-dev-server --hot --inline
Meaning of the options:

- --hot: adds the HotModuleReplacementPlugin and switch the server to hot mode.<br>
- --inline: embed the webpack-dev-server runtime into the bundle.<br>
- --hot --inline: also adds the webpack/hot/dev-server entry.


----------

(2) Modify webpack.config.js.

add new webpack.HotModuleReplacementPlugin() to the plugins field

add webpack/hot/dev-server and webpack-dev-server/client?http://localhost:8080 to the entry field

webpack.config.js looks like the following.

	var webpack = require('webpack');
	var path = require('path');
	
	module.exports = {
	  entry: [
	    'webpack/hot/dev-server',
	    'webpack-dev-server/client?http://localhost:8080',
	    './index.js'
	  ],
	  output: {
	    filename: 'bundle.js',
	    publicPath: '/static/'
	  },
	  plugins: [
	    new webpack.HotModuleReplacementPlugin()
	  ],
	  module: {
	    loaders: [{
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015', 'react']
	      },
	      include: path.join(__dirname, '.')
	    }]
	  }
	};