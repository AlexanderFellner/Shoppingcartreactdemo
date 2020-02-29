import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import { ShoppingContext } from '../context/shoppingcartcontext'
import '../App.css'


export const Cart = () => {
        const [{products,cart}] = useContext(ShoppingContext)
        console.log(cart)
return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'blue',color:'white',height:'10%px',paddingTop:'20px',paddingBottom:'20px'}}><table ><tbody>
        {cart.map((product)=><tr key={product.id+Math.random(1,1000)}><td key={product.id+Math.random(1,1000)}>
                <Link key={product.id+Math.random(1,1000)} style={{color:'white'}} to={`/product/${product.id}`}>Title: {product.title}</Link></td></tr>
                )}
      </tbody></table></div>);
}