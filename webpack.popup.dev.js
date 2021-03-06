const path = require('path');

const ENTRY_DASHBOARD = {
    in: path.resolve(__dirname, './Source/Popup/index.tsx'),
    out: path.resolve(__dirname, './Distribution/Popup/')
};

const config = {
    mode: 'development',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    entry: ['babel-polyfill', ENTRY_DASHBOARD.in ],
    output: {
        path: ENTRY_DASHBOARD.out,
        filename: '[name].app.network.js',
    },
    cache: false,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
            },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
			},
			{
				test: /\.(ttf|eot|svg|png|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader',
			}
        ]
    },
    externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'moment': 'moment'
    }
};

module.exports = config;

