module.exports = {
    mode: 'production',
    performance: {
        hints: 'warning'
    },
    output: {
        // pathinfo: false,
        path: path.join(__dirname, "/dist"),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
            hidePathInfo: true,
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true,
    },
    plugins: [
        new TerserPlugin(/* ... */),
        new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}