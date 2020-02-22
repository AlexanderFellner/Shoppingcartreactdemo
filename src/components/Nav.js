import React, { Component, useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShoppingContext } from '../context/shoppingcartcontext'


export const Nav = () => {
        const styles = {
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                background: 'purple',
                listStyle: 'none',
                height: '50px',
                color:'white'
            }
        }
        const [products, setProducts] = useContext(ShoppingContext)
        return ( <div style={styles.nav}>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/products">Products</Link>
        </div> );
        }