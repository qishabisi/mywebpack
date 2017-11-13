# CSS-loader
First is CSS-loader to read CSS file, and another is Style-loader to insert Style tag into HTML page. Different loaders are linked by exclamation mark(!).
首先是css-loader来读取css文件，然后是style-loader把style标签插到html页面中，不同的loader通过!连接

    module.exports = {
	  entry: './main.js',
	  output: {
	    filename: 'bundle.js'
	  },
	  module: {
	    loaders:[
	      { test: /\.css$/, loader: 'style-loader!css-loader' },
	    ]
	  }
	};
装loader：

    npm install style-loader --save-dev
	npm install --save-dev css-loader