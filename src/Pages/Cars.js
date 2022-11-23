import {useEffect, useState} from 'react'
import CarsItem from '../Components/CarsItem'


const Cars = () => {

    function renderArray(arr) {
        if(carsData){
            console.log(carsData)
            if (arr.length === 0) {
                return <p>„Your shopping list is empty."</p>
            }
            let items = arr.map((item, index) => {
                return <CarsItem key={index} brand={item.brand} model={item.model} engine={item.engine} basePrice={item.basePrice} mileage={item.mileage} color={item.color} imageLink={item.imageLink}></CarsItem>
            })
            return items;
        }
    }
    const[carsData, carsDataChange] = useState(null)
    useEffect(() => {
        fetch("http://localhost:8000/carsData").then((res) => {
          return res.json()
        }).then((resp) => {
            carsDataChange(resp)

        }).catch((err) => {
          console.log(err.message)
        })
      }, [])
      
      return (
          <div className="cars">
        <h1>Car List</h1>
        {renderArray(carsData)}
    </div>
)
}

export default Cars