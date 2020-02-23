import React, { useState } from 'react'
import Products from '../Products'

export const ShoppingContext= React.createContext()

export const ShoppingCartProvider = (props) => {
    const [productscartlist, setProductsCartList] = useState(Products);
    return ( <ShoppingContext.Provider value = {[productscartlist, setProductsCartList] } > { props.children } </ShoppingContext.Provider>

    );

};