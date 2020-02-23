import React,{useContext} from 'react'

import { ShoppingContext } from '../context/shoppingcartcontext'

export const Product=({match})=>{
  const [{products,cart}] = useContext(ShoppingContext)
  console.log(match.params.id)
  const cartlist=cart.filter((product)=>product.id==match.params.id)
  return(
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <ul style={{listStyleType:'none'}}>
       <li><h2>Product :</h2></li>
        <li>Title: {cartlist[0]==='undefined'?'':cartlist[0].title}</li>
        <li>Price: {cartlist[0]==='undefined'?'': cartlist[0].price}</li>
     </ul>
  </div>
  )
}