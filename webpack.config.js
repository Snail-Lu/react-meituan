const path = require('path');

module.exports = {
    mode: "development",
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // use: ['babel-loader','eslint-loader'],  //必要的时候再用
                use: ['babel-loader'],                   
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
              },
            { 
                test: /\.scss$/, 
                loaders: ['style-loader', 'css-loader', 'sass-loader'], 
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.(jpg|png)/,
                use: ['url-loader']
            }
        ]
    },
    resolve:{
        extensions:[".js", ".jsx", ".json"] //表示文件的后缀名，可以省略不写。
    },
    devServer: {
        host:'0.0.0.0',           //手机和电脑连上同一个wifi，访问电脑的本机IP:3000地址即可使用手机查看项目
        port: 3000,
        contentBase: './dist',
        historyApiFallback: true
    }
}