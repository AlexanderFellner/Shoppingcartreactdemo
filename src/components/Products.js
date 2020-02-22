import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import { ShoppingContext } from '../context/shoppingcartcontext'
import '../App.css'


export const Products = () => {
        const [products, setProducts] = useContext(ShoppingContext)
        console.log(products)
return(<div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'blue',color:'white',height:'80px',paddingTop:'20px'}}><table >
        {products.map((product)=><div><tr>
                <Link style={{color:'white'}} to={`/product/${product.id}`}><td>Title: {product.title}</td></Link></tr>
                <br/></div>)}
       </table></div>);
}