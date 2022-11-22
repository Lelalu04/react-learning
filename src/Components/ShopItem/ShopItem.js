import React from 'react'

const ShopItem = ({title, boolean}) => {

    const shoppingCart = (boolean === "true") ? "add to shopping cart" : "Order Product"
    // const button = document.querySelector(`button`)
    // if(button){
    //     button.addEventListener("click", () => {
            
    //     })
    // }
   
  return (
    <fieldset>
        <legend>ShopItem</legend>
        <h2 className="title">The Item: {title}</h2>
        <p className="in-stock">In Stock: {boolean}</p>
        <button>{shoppingCart}</button>
    </fieldset>
  )
}
export default ShopItem