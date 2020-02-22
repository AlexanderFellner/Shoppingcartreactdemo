import React,{useContext} from 'react'
import {match} from 'react-router-dom'
import { ShoppingContext } from '../context/shoppingcartcontext'

export const Product=({match})=>{
  const [products, setProducts] = useContext(ShoppingContext)
  console.log(match.params.id)
  const product=products.filter((product)=>product.id==match.params.id)
  return(
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <ul style={{listStyleType:'none'}}>
       <li><h2>Product :</h2></li>
        <li>Title: {product[0]=='undefined'?'':product[0].title}</li>
        <li>Price: {product[0]=='undefined'?'': product[0].price}</li>
     </ul>
  </div>
  )
}