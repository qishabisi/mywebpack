var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./app/index.js',
    output:{
        path:__dirname+'/app/build/',
        filename:'js/[name]-[chunkhash].js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./app/index.tem.html',
            inject:'body',
            title:'变量定义的哦',
            minify:{
                // collapseWhitespace:true,
                removeComments:true
            }
        })
    ]
}
