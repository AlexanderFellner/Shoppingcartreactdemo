import React, { useState } from 'react'
import Products from '../Products'

export const ShoppingContext= React.createContext()

export const ShoppingCartProvider = (props) => {
    const [products, setProducts] = useState(Products);
    return ( <ShoppingContext.Provider value = {[products, setProducts] } > { props.children } </ShoppingContext.Provider>

    );

};