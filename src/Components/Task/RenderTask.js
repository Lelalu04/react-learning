import React, { Children, useState } from 'react'
import axios from 'axios'
import OrLiveEditing from './OrLiveEditing'
// import { useNavigate } from 'react-router-dom'


const RenderTask = (props) => {

    const [editButton, setEditButton] = useState(false)

    
    
    const {keyid, done, title, onClickRemove, onClickEdit, children} = props
    console.log(props)
    
    return <><li  onClick={(e) => e.target.classList.toggle("done")}
        className={done
            ? "li-item done"
            : "li-item"}
            keyid={keyid}>
        {/* {children} */}
        Task: <OrLiveEditing editButton={editButton} title={title}/>
    </li>
    
        {/* <RemoveButton  keyid={keyid}></RemoveButton> */}
        <button  onClick={() => onClickRemove(keyid)}>Remove</button>
        <button  onClick={() => { 
            // setEditIdText({title, id:keyid})
            setEditButton(prevState => !prevState)
            // setEditText(title)
            }}>Edit</button>
        {/* {console.log(editText)} */}
        {console.log(editButton)}
    </>
}

export default RenderTask