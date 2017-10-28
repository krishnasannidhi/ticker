const webpack = require('webpack')
const path= require('path')
const httpPort=process.env.PORT || 8000;


module.exports=
  {
    entry:{
      bundle:'./index.js'
    },
    output:{
      path:   path.resolve(__dirname,'dist'),
      publicPath:'/dev/',
      filename:'[name].js'
    }
  }
