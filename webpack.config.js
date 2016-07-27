module.exports = {
    entry: "./app.js",
    output: {
        filename: 'bundle.js'
    },
    module:{
        preLoader:[
            {
                test:/\.js$/,
                exclude: /node-module/,
                loader: 'jshint-loader'
            }
        ],
        loader:[
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    watch: true,
    resolve:{
        extensions:['','.js','.jsx']
    },
    devtool: 'eval-sourse-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'normal',

        host: process.env.HOST || 'localhost',
        port: process.env.PORT || '3000',

        proxy:{
            '/api/*':{
                target: 'http://localhost:9000',
                secure: false
            }
        }

    }
};