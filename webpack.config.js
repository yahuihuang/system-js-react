const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env)=>{
    return {
        mode: 'development',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: env.production ? 'system' : ''
        },
        module: {
            rules: [
                {
                    test: /\.js$/, 
                    use: { loader: 'babel-loader' },
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            !env.production && new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ],
        externals: env.production? ['react', 'react-dom'] : []
    }
}