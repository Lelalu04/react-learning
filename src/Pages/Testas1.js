import React, { useEffect, useState } from "react"
import EuropText from "./../Components/EuropText"
function HomePage(){
    const [europe, setEurope] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(europe =>{
   setEurope(europe)
        })
    },[])
    console.log(europe)
    return(
        <div>
            <h1>Home Pagekkkk</h1>
           {europe.map((city,index)=>{<EuropText key = {index} cityName={city.name.common} capital={city.capital} continents={city.continents} languages={city.languages} population={city.population} borders={city.borders} />
    })}
            </div>
    )
    }
    export default HomePage