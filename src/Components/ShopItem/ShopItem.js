import React from 'react'
import {useState} from 'react'


const ShopItem = ({title, inStock}) => {
    const [stock, setStock] = useState(inStock)
    // const [text, setText] = useState(shoppingCart)
    
    
    const inStockP = (stock === true) ? "In Stock" : "Out Stock"
    const shoppingCart = (stock === true) ? "Add to shopping cart" : "Order Product"
    const clickHandler = () => {
        setStock(prevState => !prevState)
        
        // setText(shoppingCart)
    }
    return (
        <div>
        <h2 className="title">The Item: {title}</h2>
        <p className="in-stock">{inStockP}</p>
        <button onClick={clickHandler}>{shoppingCart}</button>
        {/* {shoppingCart} */}
    </div>
  )
}
export default ShopItem