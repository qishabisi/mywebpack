# multiply entry多个入口文件
与单个入口文件不同在于

    单个
    module.exports = {
      entry: './main.js',
      output: {
    	filename: 'bundle.js'
      }
    };

    多个
    module.exports = {
      entry: {
	    bundle1: './main1.js',
	    bundle2: './main2.js'
      },
      output: {
    	filename: '[name].js'//生成bundle1/bundle2.js
      }
    };
我尝试着不加bundle1/2但是出错了 表明要声明多个变量