import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RenderTask from '../Components/Task/RenderTask'


const Task = () => {
    const [data, setData] = useState(null)
    const [title, setTitle] = useState()
    const [editButton, setEditButton] = useState(false)
    // const [editInputText, seteditInputText] = useState()
    const [editIdText, setEditIdText] = useState({ id: null, text: null })

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const res = await axios.get("http://localhost:8000/taskData");
        setData(res.data)
    }

















    async function handleRemove(key) {
        console.log(key)
        let res = await axios.delete("http://localhost:8000/taskData/" + key)
        // console.log(res)
        getData()
    }

    async function handleEdit(title) {
        // console.log(param)
        // seteditInputText(title)
        setEditButton(prevState => !prevState)
        // let res = await axios.delete("http://localhost:8000/taskData/"+ param.keyid.toString(), {})
        // console.log(res)
        // name()
    }
    // const RemoveButton = (props) => {
    //     return <button key={props} keyid={props} onClick={() => { handleRemove(props) }}>Remove</button>
    // }
    // const EditButton = ({ title, keyid }) => {
    //     // console.log(keyid)
    //     // console.log(editIdText)
    //     return <button key={keyid} keyid={keyid} onClick={() => {
    //         setEditIdText({ title, id: keyid })
    //         setEditButton(prevState => !prevState)
    //     }}>Edit</button>
    // }
    const OrLiveEditing = ({ keyid, title }) => {
        // setEditIdText({id: keyid, text:title})
        return (editIdText.id == keyid && editButton) ? <input onChange={(e) => {
            // e.preventDefault()
            setEditIdText({ title: e.target.value, id: keyid })
        }} value={editIdText.title} /> : title
    }
    // async function handleRemove(param) {
    //     console.log(param)
        
    //     let res = await axios.delete("http://localhost:8000/taskData/" + param.keyid)
    //     // name()
    // }
    
    const taskList = data && <ul>{data.map((element, index) =>
        // <React.Fragment key={index}>
            <RenderTask
            key={index}
            done={element.done}
            keyid={element.id}
            title={element.title}
            onClickRemove={value => handleRemove(value)}
            
            >
            {/* Task: <OrLiveEditing  title={element.title}/> */}
        </RenderTask>
        // <button  onClick={() => { handleRemove(element.id) }}>Remove</button>
        // <button onClick={() => { 
        //     // setEditIdText({title, id:keyid})
        //     setEditButton(prevState => !prevState)
        //     }}>Edit</button>
            // </React.Fragment>
            )}
    </ul>




    const handleSubmit = async (e) => {
        console.log(data)
        e.preventDefault()
        setTitle(e.target.elements.title.value)
        let res = await axios.post("http://localhost:8000/taskData", { title, done: false })
        setData(prevState => prevState.concat(res.data))
        e.target.reset()
    }

    return (
        <>
            <div>Task</div>
            {taskList}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Create Task</legend>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}></input>
                    <input type="submit"></input>
                </fieldset>
            </form>
        </>
    )
}

export default Task