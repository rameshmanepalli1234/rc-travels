const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');
const ini = require('ini');
require('dotenv').config();

// Function to read ACCESS_KEY from .npmrc file
function getAccessKeyFromNpmrc() {
  try {
    const npmrcPath = path.join(__dirname, '.npmrc');
    if (fs.existsSync(npmrcPath)) {
      const npmrcContent = fs.readFileSync(npmrcPath, 'utf8');
      const npmrcConfig = ini.parse(npmrcContent);

      // Get access-key-env from .npmrc and resolve environment variable
      const accessKeyEnvVar = npmrcConfig['access-key-env'];
      if (accessKeyEnvVar) {
        return process.env[accessKeyEnvVar] || '';
      }
      return '';
    }
  } catch (error) {
    console.warn('Warning: Could not read .npmrc file:', error.message);
  }
  return '';
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  // Get port from environment variable with fallback for production
  const port = process.env.DEV_SERVER_PORT || '3000';
  const publicUrl = isProduction
    ? '/'
    : process.env.PUBLICURL || 'http://localhost:3000';

  // Only warn in development mode
  if (!isProduction && !process.env.DEV_SERVER_PORT) {
    console.warn('Warning: DEV_SERVER_PORT not set, using default port 3000');
  }

  if (!isProduction && !process.env.PUBLICURL) {
    console.warn(
      'Warning: PUBLICURL not set, using default http://localhost:3000'
    );
  }

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@app-types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@messages': path.resolve(__dirname, 'src/messages'),
        '@containers': path.resolve(__dirname, 'src/containers'),
      },
      fallback: {
        url: require.resolve('url/'),
        path: require.resolve('path-browserify'),
        fs: false,
        crypto: false,
        stream: false,
        buffer: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        publicPath: isProduction ? '/' : publicUrl,
        inject: true,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
      new webpack.DefinePlugin({
        'process.env.ACCESS_KEY': JSON.stringify(
          process.env.ACCESS_KEY || getAccessKeyFromNpmrc()
        ),
        'process.env.REACT_APP_ACCESS_KEY': JSON.stringify(
          process.env.ACCESS_KEY || getAccessKeyFromNpmrc()
        ),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
        serveIndex: false,
      },
      compress: true,
      port: port,
      hot: true,
      open: true,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      // Enable live reload for better development experience
      liveReload: true,
      // Watch for file changes
      watchFiles: ['src/**/*'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
  };
};
