import React from 'react'

const CityItem = ({ data,even, lastCount }) => {
    let { name, population, location, touristAttractions, isCapital} = data

    const checkPopulation = population ? population : "Not population information"
    const checkContinent = location.continent ? location.continent : "Not continent information"
    const checkCountry = location.country ? location.country : "Not country information"
    const checkTouristAttractions = (touristAttractions <= 0 || !touristAttractions) ? <p>Not tourist attractions information.</p> : <><p>{(touristAttractions.length === 1) ? `Main Tourist attraction of ${location.country} is:` : `Main Tourist attractions of ${location.country} are:` }</p><ul>{touristAttractions.map((turis, index) => {
        return <li key={index}>{turis}</li>
    })}</ul></>
    
    const checkIsCapital = isCapital ? <h2 className='capital'>{name} (Capital)</h2> : <h2>{name}</h2>
    const stringIsCapital = isCapital && <p>{name} is the capital of {location.country}.</p>
    const lastElement = even && lastCount ? "city-item last" : "city-item"
    console.log(even)
    console.log(lastCount)



    // 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
    // 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
    // 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
    // 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.



    // 5. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.
    return (
        <div className={lastElement}>
            {checkIsCapital}
            {stringIsCapital}
            <p>Population: {checkPopulation}</p>
            <p>Location:</p>
            <ul>
                <li>Continent: {checkContinent}</li>
                <li>Country: {checkCountry}</li>
            </ul>
            {checkTouristAttractions}
        </div>
    )
}

export default CityItem