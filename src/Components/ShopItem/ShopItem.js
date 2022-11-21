import React from 'react'

const ShopItem = ({title, boolean}) => {
  return (
    <fieldset>
        <legend>ShopItem</legend>
        <h2>Preke: {title}</h2>
        <p>Turime: {boolean}</p>
    </fieldset>
  )
}
export default ShopItem