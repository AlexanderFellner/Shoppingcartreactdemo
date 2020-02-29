 const express=require('express')
 const app=express()
 const bodyParser=require('body-parser')
 const webscrap=require('../src/webscraper')
 
 
 app.use((req,res,next)=>{
     res.header('Access-Control-Allow-Origin','*');
     res.header('Access-Control-Allow-Headers','Content-Type');
     next()
 })
 app.use(bodyParser.json())
 app.get('/products',(req,res,next)=>{
    
    
    
     next();
 })
 //app.use(()=>express.json())
 
 app.post('/product',(req,res,next)=>{
     //const product=req.body
     console.log('on server')
     console.log(req.body)
    // res.sendStatus(200)
    /* const product={
        title:"From Server "+req.body.title,
        price:req.body.price+20
    }
     res.send(product) */

     const searchtext=req.body.title
     webscrap('https://www.amazon.com',searchtext).then((titlesandimages)=>{console.log(titlesandimages); res.send(JSON.stringify(titlesandimages))})
    
     //next()
 })
 
 app.listen(5000,(req,res)=>{
      console.log("Server startet on port 5000 ")
 })