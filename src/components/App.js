import React, { PureComponent} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { ShoppingCartProvider } from '../context/shoppingcartcontext'
import {About} from './About'
import {Home} from './Home'
import {Products} from './Cart'
import {Product} from './Product'
import {ProductForm} from './ProductForm'
import {ProductSearchForm} from './ProductSearchForm'

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
        return (<div><ShoppingCartProvider> 
            <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/" exact  component={Home}/>      
                <Route path="/about"  component={About}/>     
                <Route path="/products" component={Products}/>   
                <Route path="/product/:id"  component={Product}/> 
                <Route path="/productaddform" component={ProductForm}/>   
                <Route path="/productsearchform" component={ProductSearchForm}/>  
            </Switch>
            </BrowserRouter>
            </ShoppingCartProvider></div> )
    }
}


export default App