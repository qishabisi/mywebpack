# Babel-loader
loader是预处理机制，将你的应用程序的资源文件（更多信息）。例如，**Babel loader可以变换JSX / ES6文件转换成js文件**<br>
1、先装babel-loader

    npm install --save-dev babel-loader babel-core
2、装babel插件，像我们这里要将react和ES5装换成js语法，哈哈虽然没ES6

>http://babeljs.io/docs/plugins/

    npm install --save-dev babel-cli babel-preset-es2015
	npm install --save-dev babel-cli babel-preset-react

这里要重点写的是怎么来声明这些loader

2-1：

    module: {
	    loaders: [
	      {
		    test: /\.jsx?$/,
		    exclude: /node_modules/,
		    loader: 'babel',
		    query: {
		      presets: ['es2015', 'react']
		    }
	      }
	    ]
    }
等同于

    module: {
	    loaders:[
	      {
	        test: /\.js[x]?$/,
	        exclude: /node_modules/,
	        loader: 'babel-loader?presets[]=es2015&presets[]=react'
	      },
	    ]
	}
2-2：还可以生成一个 .babelrc文件保存配置信息

    // .babelrc
	{
	  "parserOpts": {
	    "plugins": ["jsx", "flow"]
	  }
	}
2-3：还可以在package.json中直接添加"babel":"es2015&react";