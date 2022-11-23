import React from 'react'

const CarsItem = ({brand,model,engine,basePrice,mileage,color,imageLink}) => {
    const cheakBrand = brand ? brand : "Not brand"
    const cheakModel = model ? model : "Not model"
    const cheakEngine = engine && <li>Engine: {engine}</li>
    const cheakMileage = mileage && <li>Mileage: {mileage}</li>
    const cheakBasePrice = basePrice && <li>Price: {basePrice}</li>
    const cheakColor = color && <li>Color: {color}</li>
    const cheakImageLink = imageLink && <img alt='' src={imageLink}></img>

    const afterClick = () => {
        alert("hi")
    }
    return (
    <div className="car-item">
        <h2 className="title">{cheakBrand} {cheakModel}</h2>
        <ul>
        {cheakEngine}
        {cheakMileage}
        {cheakBasePrice}
        {cheakColor}
        </ul>
        {cheakImageLink}
        <button onClick={afterClick}>Full Info</button>
    </div>
  )
}

export default CarsItem