import React from 'react'
import CityItem from '../Components/CityItem'
const Cities = () => {
    const citiesArr = [
        {
            name: "Jonava",
            population: 26853,
            location:{
                continent: "Europe",
                country:"Lietuva",
            },
            touristAttractions: [],
            isCapital: false
        },
        {
            name: "Kaunas",
            population: 295269,
            location:{
                continent: "Europe",
                country:"Lietuva",
            },
            touristAttractions: ["Art Deco muziejus"],
            isCapital: false
        },
        {
            name: "Vilnius",
            population: 544386,
            location:{
                continent: "Europe",
                country:"Lietuva",
            },
            touristAttractions: ["Gedimino pilies bokštas","Stiklo kvartalas", "MO muziejus"],
            isCapital: true
        },
        {
            name: "West Sussex",
            // population: 858852,
            location:{
                continent: "Europe",
                country:"England",
            },
            touristAttractions: ["The Seven Sisters","National Trust", "National Trust - Petworth House and Park"],
            isCapital: false
        },
        {
            name: "Kazkas",
            population: 5443861,
            location:{
                continent: "Europe",
                country:"Lietuva",
            },
            touristAttractions: ["lankitinas1","lankitinas12", "lankitinas15"],
            isCapital: true
        },
        {
            name: "Vilnius",
            population: 544386,
            location:{
                // continent: "Europe",
                country:"Lietuva",
            },
            // touristAttractions: ["Gedimino pilies bokštas","Stiklo kvartalas", "MO muziejus"],
            isCapital: true
        }
    ]
    function renderCity(arr) {
        return arr.map((city, index) => {
            return <CityItem key={index} data={city} lastCount={arr.length - 1 === index} even={arr.length % 2 !== 0}/>
        })
        // return arr
    }

  return (
    <>
        <h1>Cities</h1>
    <div className="city-list">
        {renderCity(citiesArr)}
    </div>
    </>
  )
}

export default Cities