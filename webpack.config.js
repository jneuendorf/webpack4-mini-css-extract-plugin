const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const mode = 'development'


module.exports = {
    mode,
    context: __dirname,
    entry: {
        'test': './test.scss',
    },
    output: {
        path: __dirname,
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: [/\.s[ac]ss$/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(
                                    __dirname,
                                    'postcss.config.js'
                                ),
                                ctx: {mode}
                            },
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            attempts: 1,
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'fast-sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devtool: false,
    watch: true
}
