const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

const config = {
    context:      path.resolve(__dirname, './src'),
    devtool: 'source-map',
    entry: ['./index.js'],
    output: {
        filename:      'index.js',
        path:          path.resolve(__dirname, './dist'),
        library:       'aws-cognito-promises',
        libraryTarget: 'umd'
    },
    externals: {
        'amazon-cognito-identity-js': {
            root: ['amazon-cognito-identity-js'],
            commonjs2: 'amazon-cognito-identity-js',
            commonjs: 'amazon-cognito-identity-js',
            amd: 'amazon-cognito-identity-js'
        },
        'aws-sdk/global': {
            root: ['AWSCognito'],
            commonjs2: 'aws-sdk/global',
            commonjs: 'aws-sdk/global',
            amd: 'aws-sdk/global'
        },
        'aws-sdk/clients/cognitoidentityserviceprovider': {
            root: ['AWSCognito', 'CognitoIdentityServiceProvider'],
            commonjs2: 'aws-sdk/clients/cognitoidentityserviceprovider',
            commonjs: 'aws-sdk/clients/cognitoidentityserviceprovider',
            amd: 'aws-sdk/clients/cognitoidentityserviceprovider'
        },
    },
    module: {
        rules: [{
            test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {
                presets: ['es2015', 'stage-0'], plugins: ['transform-react-jsx']
            }
        }, {
            test: /\.css$/, use: ['style-loader', 'css-loader']
        }, {
            test: /\.(csv|tsv)$/, use: ['csv-loader']
        }, {
            test: /\.xml$/, use: ['xml-loader']
        }]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}
module.exports = config
