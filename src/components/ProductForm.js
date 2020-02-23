import React, { useContext ,useState} from 'react'
import { ShoppingContext } from '../context/shoppingcartcontext'

export const ProductForm=()=>{
    const [{products,cart},setProductsCartList] = useContext(ShoppingContext)
    const [id,setId]=useState()
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState(0)
    const addProduct=(event)=>{
        event.preventDefault()
        let id=1
        if(products.length>=1){
           const lastproduct=products[products.length-1];
           id=lastproduct.id
           id++
        }
       
        if( title.length>=1 && price.length>=1){
           // products.push(product)
          
            if(!isNaN(price)){
                const product={id,title,price}
                cart.push(product)
               // console.log(cart)
                setProductsCartList({products,cart})
               // console.log(products)
            }
        }
       

    }
    const onChange=(event)=>{
        const {name,value}=event.target
        if( value.length>1) {
            switch(name){
            case "title": setTitle(value);break
            case "price": setPrice(value);break
            default:
            }
       }
    }
    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:'50px',height:'500px'}}>
            <form className="form-group" onSubmit={addProduct}>
            <div  style={{marginBottom:'20px'}}>
              <input type="text" className="form-control" name="title" onChange={onChange} />
               </div>
              <div  style={{marginBottom:'20px'}}>
              <input type="text" className="form-control" name="price" onChange={onChange} />
              </div>
              <div>
              <input type="submit" className="btn btn-primary"   value="AddProduct"/>
              </div>
            </form>
        </div>
    )
}