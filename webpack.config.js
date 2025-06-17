const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './src/js/index.js',
    services: './src/js/services.js',
    instructions:'./src/js/instructions.js',
    about:'./src/js/about.js',
    dashboard: './src/js/dashboard.js',
    login: './src/js/login.js',
    logincon: './src/js/login-config.js',
    register: './src/js/register.js',
    registercon: './src/js/register-config.js',
    terms: './src/js/terms.js',
    validation: './src/js/validation.js',
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',  // 让不同 entry 生成独立的 JS 文件
    // filename: 'main.js',  // 让不同 entry 生成独立的 JS 文件
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              partialDirs: [path.join(__dirname, 'src', 'partials')],
              allowRequire: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        // exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.hbs',
      templateParameters: {
        title: 'Home',
      },
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/services.hbs',
      filename: 'services.html',
      chunks: ['services']
    }),
    new HtmlWebpackPlugin({
      filename: 'instructions.html',
      template: './src/pages/instructions.hbs',
      templateParameters: {
        title: 'Appointment',
      },
      chunks: ['instructions']
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.hbs',
      templateParameters: {
        title: 'About Us',
      },
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/dashboard.html',
      filename: 'dashboard.html',
      chunks: ['main', 'dashboard', 'validation']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/login.html',
        filename: 'login.html',
        chunks: ['login', 'logincon']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register.html',
      filename: 'register.html',
      chunks: ['register', 'registercon', 'validation']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/terms.hbs',
        filename: 'terms.html',
        chunks: ['terms']
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/privacy.hbs',
        filename: 'privacy.html',
        chunks: ['terms']
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
};
