import React, { useContext } from 'react'
import { CardContext } from './context/card-context'
import * as styles from './App.css'

export
const Card = () => {
        const [products, setProducts] = useContext(CardContext)
        console.log(products)


        return ( < ul style = {
                    { listStyleType: 'none' }
                } > {
                    products.map(product => < li key = { product.id } > { product.title } { product.price } < /li> )} < /ul > );



                };