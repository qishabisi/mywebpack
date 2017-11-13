# Image loader

    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
    ]
 If the image size is smaller than 8192 bytes, it will be transformed into Data URL; otherwise, it will be transformed into normal URL. As you see, question mark(?) is used to pass parameters into loaders.
如果图像大于8192字节，它将被转换成数据URL，否则，将被装换成一般URL，正如你所见，问号？被用来将参数传递到loaders中

装URL-loader和file-loader

    npm install --save-dev url-loader
	npm install --save-dev file-loader
与此同时他生成了相应的图像文件，应该是读取后转换的URL