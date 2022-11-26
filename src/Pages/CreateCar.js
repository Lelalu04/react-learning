import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCar = () => {

    // const[id,idChange]=useState("")
    const [brand, brandChange] = useState("")
    const [model, modelChange] = useState("")
    const [engine, engineChange] = useState("")
    const [basePrice, basePriceChange] = useState("")
    const [mileage, mileageChange] = useState("")
    const [color, colorChange] = useState("")
    const [imageLink, imageLinkChange] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const carData = { brand, model, engine, basePrice, mileage, color, imageLink }
        console.log(carData)
        fetch("http://localhost:8000/carsData", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(carData)

        }).then((res) => {
            alert("Saved successfully.")
            navigate("/Cars")
        }).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <>
            <div>Create Car</div>
            <form id="car-form" onSubmit={handleSubmit}>
                <label htmlFor="brand">Brand:</label>
                <input type="text" name="" value={brand} onChange={e => brandChange(e.target.value)} id="brand" placeholder="Brand" /><br />

                <label htmlFor="model">Model:</label>
                <input type="text" name="" value={model} onChange={e => modelChange(e.target.value)} id="model" placeholder="Model" /><br />

                <label htmlFor="engine">Engine:</label>
                <input type="text" name="" value={engine} onChange={e => engineChange(e.target.value)} id="engine" placeholder="Engine" /><br />

                <label htmlFor="basePrice">Base Price:</label>
                <input type="text" name="" value={basePrice} onChange={e => basePriceChange(e.target.value)} id="basePrice" placeholder="Base Price" /><br />

                <label htmlFor="mileage">Mileage:</label>
                <input type="text" name="" value={mileage} onChange={e => mileageChange(e.target.value)} id="mileage" placeholder="Mileage" /><br />

                <label htmlFor="color">Color:</label>
                <input type="text" name="" value={color} onChange={e => colorChange(e.target.value)} id="color" placeholder="Color" /><br />

                <label htmlFor="imageLink">Image Link:</label>
                <input type="text" name="" value={imageLink} onChange={e => imageLinkChange(e.target.value)} id="imageLink" placeholder="Image Link" /><br />
                <input type="submit" value="Create" />

            </form>
        </>
    )
}

export default CreateCar