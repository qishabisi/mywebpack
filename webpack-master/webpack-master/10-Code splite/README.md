# Code splite
大型Web应用程序不是有效的把所有的代码放到一个单独的文件，允许你WebPACK分割成几块。特别是如果某些代码块只需要在某些情况下，这些块可以加载的需求

首先，用require.ensure来定义分割点

    require.ensure(['./a'], function(require) {
	  var content = require('./a');
	  document.open();
	  document.write('<h1>' + content + '</h1>');
	  document.close();
	});
require.ensure告诉webpack ./a.js应该从bundle.js中分离并且创一个单独块文件

**表面上你不会有任何差异。 然而，Webpack实际上将main.js和a.js构建到不同的块（bundle.js和1.bundle.js）中，并根据需要从bundle.js加载1.bundle.js**