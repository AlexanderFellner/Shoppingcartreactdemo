import React, { Component, useContext } from 'react'
import { CardContext } from './context/card-context'

export const Nav = () => {
        const styles = {
            nav: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                background: 'purple',
                listStyle: 'none',
                height: '50px'
            }
        }
        const [products2, setProducts] = useContext(CardContext)
        return ( < div > < nav style = { styles.nav } > < li > Home < /li > < li > About < /li > < li > Productslist < /li> < /nav > < /div > )
        }