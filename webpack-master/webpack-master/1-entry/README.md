# Entry File 入口文件
Webpack将根据Entry file来建立bundle.js,然后页面引用bundle.js

For example, main.js is an entry file.

    // main.js
    document.write('<h1>Hello World</h1>');
index.html

    <html>
      <body>
    <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
通过配置webpack.config.js 来生成 bundle.js

    module.exports = {
      entry: './main.js',
      output: {
      	filename: 'bundle.js'
      }
    };