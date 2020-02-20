import React, { useState } from 'react'

export
const CardContext = React.createContext()

export const CardProvider = (props) => {
    const [products, setProducts] = useState([{ id: '1', title: 'Java', price: '1' },
        { id: '2', title: 'Javascript', price: '10' }
    ]);
    return ( <
        CardContext.Provider value = {
            [products, setProducts]
        } > { props.children } < /CardContext.Provider>

    );

};