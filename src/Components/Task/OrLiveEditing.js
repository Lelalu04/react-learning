import React, { useState } from 'react'
import PropTypes from 'prop-types'

const OrLiveEditing = props => {
    console.log(props)
    const [editText, setEditText] = useState(props.title)
        
     
    
  return (
    // <h1>fd</h1>
    props.editButton ? <input onChange={(e) => setEditText(e.target.value)
    } value={editText} /> : props.title
  )
}
export default OrLiveEditing

