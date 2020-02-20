import React, { PureComponent, useState } from 'react'
import { Card } from './Card'
import Cart from './Card'
import { CardProvider } from './context/card-context'
import * as styles from './App.css'
import { Nav } from './Nav'

class App extends React.Component {
    constructor(props) {
        super(props)
            /*  this.state = {
                 products: [{ id: '1', title: 'Java', price: '1' },
                     { id: '2', title: 'Javascript', price: '10' }
                 ]
             } */
    }



    render() {
        return ( < div > < CardProvider > < Nav style = { styles.nav }
            / > < Card / > < /CardProvider> < /
            div > )
    }
}

export default App