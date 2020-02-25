import React, { useState } from 'react'

export const ProductSearchForm=()=>{
    const[title,setTitle]=useState('')
    const SearchProduct=(event)=>{
        event.preventDefault()
        // console.log(product)
        const product={
            title:title,
            price:10
        };
        console.log(product)
        fetch('http://localhost:5000/product',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product),
        }).then(response=>response.json()).then((response)=>console.log(response)) 
        
    }
    const ChangeProduct=(event)=>{
        //  console.log(event.target.value)
         setTitle(event.target.value)
    }
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',padding:'50px',height:'500px'}}>
            <form onSubmit={SearchProduct}>
                <div style={{marginBottom:'20px'}}>
                <input type="text" name="searchproduct"  className="form-control" onChange={ChangeProduct}></input>
                </div>
                <div style={{marginBottom:'20px'}}>
                <input type="submit" readOnly className="btn btn-primary" name="searchbutton"  value="Search Product"/>
                </div>
            </form>
        </div>
    )
}