const webpack = require('webpack')
const path= require('path')
const httpPort=process.env.PORT || 8000;
const HtmlWebpackPlugin=require('html-webpack-plugin')


module.exports=
  {
    resolve:{
      extensions:['.js','.jsx'],
    //  moduleDirectories:['node_modules']
    },
    devtool:'inline-source-map',
    entry:{
      bundle:'./src/index.js'
    },
    output:{
      path:   path.resolve(__dirname,'dist'),
      filename:'[name].js'
    },
    watch:true,
    watchOptions:{
      aggregateTimeout:5000, //auto build will run after 5 secs of last save.
      ignored:/node_modules/,
      //poll:10000

    },
    plugins:[
      new HtmlWebpackPlugin({template: './src/index.html'}),
      new webpack.DefinePlugin({
        'process.env.PORT':JSON.stringify(process.env.PORT)
      })
    ],
    module:{
      rules:[
        {
          use: 'babel-loader',
          test:/\.js$/,
          exclude:'/node_modules/'
        },
        {
          use: 'babel-loader',
          test:/\.jsx$/,
          exclude:'/node_modules/'
        }
      ]
    }
  }
