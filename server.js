const express = require('express')
const app= express()
const path=require('path')


// https://finance.google.com/finance/match?matchtype=matchall&ei=S__4WfGoAsTEeKLXj7gF&q=soup

app.use(express.static('dist'))
app.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))
})

app.listen(process.env.PORT || 4000,()=>{console.log('listening',process.env.PORT)})
