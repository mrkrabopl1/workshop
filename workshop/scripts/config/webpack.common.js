const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { PROJECT_PATH } = require('../constant')
const { isDevelopment, isProduction } = require('../env')

const getCssLoaders = () => {
    const cssLoaders = [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    localIdentName: "[local]--[hash:base64:5]"
                },
                sourceMap: isDevelopment,
            }
        }
    ]


    isProduction && cssLoaders.push({
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    isProduction && [
                        'postcss-preset-env',
                        {
                            autoprefixer: {
                                grid: true
                            }
                        }
                    ]
                ]
            }
        }
    })

    return cssLoaders
}
module.exports = {
    entry: {
        app: path.resolve(PROJECT_PATH, './src/index.tsx')
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename],
        },
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...getCssLoaders()]
            },
            {
                test: /\.less$/,
                use: [
                    ...getCssLoaders(),
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: isDevelopment,
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    ...getCssLoaders(),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment,
                        }
                    }
                ]
            },
            {
                test: /\.(tsx?|jsx?)$/,
                loader: 'babel-loader',
                options: { cacheDirectory: true },
                exclude: /node_modules/,
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024,
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2?)$/,
                type: 'asset/resource',
            },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack'],      //Это если юзать svg как компонент но чет такое
            // },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
        }),
        new WebpackBar({
            name: 'Link Startou!!!',
            color: '#52c41a'
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: path.resolve(PROJECT_PATH, './tsconfig.json'),
            },
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: 'public',
                    from: '*',
                    to: path.resolve(PROJECT_PATH, './dist/public'),
                    noErrorOnMissing: true,
                    toType: 'dir',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ['**/index.html'],		// ** Represents any directory
                    },
                },
            ],
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
            'src': path.resolve(__dirname, '../../src'),
        }
    },
}