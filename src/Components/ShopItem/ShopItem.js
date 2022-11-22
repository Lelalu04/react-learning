import React from 'react'

const ShopItem = ({title, inStock}) => {

    const shoppingCart = (inStock === true) ? "add to shopping cart" : "Order Product"
    const inStockP = (inStock === true) ? "In Stock" : "Out Stock"
  
  return (
    <div>
        <h2 className="title">The Item: {title}</h2>
        <p className="in-stock">{inStockP}</p>
        <button>{shoppingCart}</button>
    </div>
  )
}
export default ShopItem