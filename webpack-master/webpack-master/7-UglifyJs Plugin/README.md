# UglifyJs Plugin 插件系统来扩展Webpack的功能

    var webpack = require('webpack');
	var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
	module.exports = {
	  entry: './main.js',
	  output: {
	    filename: 'bundle.js'
	  },
	  plugins: [
	    new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	  ]
	};
开启服务之后，main.js将被打包成

	var longVariableName = 'Hello';
	longVariableName += ' World';
	document.write('<h1>' + longVariableName + '</h1>');
	
	＝＝＞

    var o="Hello";o+=" World",document.write("<h1>"+o+"</h1>")

详细参数
>http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin

**UglifyJsPlugin**

new webpack.optimize.UglifyJsPlugin([options])
Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode. You can pass an object containing UglifyJS options.
最小化所有的JS输出快，拟可以通过包含UglifyJS参数的对象，使loader切换到最小模式

    new webpack.optimize.UglifyJsPlugin({
	    compress: {
	    	warnings: false
	    }
    })
UglifyJS options:



1. compress (boolean|object): options for UglifyJS compression, which is enabled by default - see the Compressor source for options and defaults.
	
	UGJS压缩的选项，默认情况下启用

	Use compress: false to explicitly disable compression.显示禁用压缩

2. mangle (boolean|object): options for UglifyJS variable name mangling, which is enabled by default - see _default_mangler_options in UglifyJS’ source for options and defaults.

	Use mangle: false to explicitly disable mangling.

3. mangle.props (boolean|object): passing true or an object enables 	and provides options for UglifyJS property mangling - see UglifyJS 	documentation for mangleProperties for options.

4. Note: the UglifyJS docs warn that you will probably break your source if you use property mangling, so if you aren’t sure why you’d need this feature, you most likely shouldn’t be using it!

5. output: an object providing options for UglifyJS’ OutputStream - see the OutputStream source for options and defaults.