

import React from 'react'
function EuropText(props) {
    console.log(props.borders)
    const info = props.borders && <ul className='borders-list'>
{props.borders.map((border,index)=>{ return <li className='border-list' key={index}>{border}</li>})}
</ul> 
  return (
    <div className='europe-wrapper'>
       <h2 className='europe-title'>{props.cityName} ({props.capital})</h2>
       <p className='europe-text'>{props.continents}  {props.population}</p>
        <span>borders with:</span>
        {info}
    </div>
  )
}
export default EuropText