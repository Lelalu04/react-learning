import { React, useState } from 'react'

const Counter = () => {
    const [input, setInput] = useState(1)
    const [addingInputCount, setAddingInputCount] = useState(1)
    const [inputList, setInputList] = useState([]);
    const plusButtonDisable = input + addingInputCount >= 11 ? true : null
    const minusButtonDisable = input - addingInputCount <= 0 ? true : null
    const plus2ButtonDisable = input >= 9 ? true : null
    const minus2ButtonDisable = input <= 2 ? true : null
    const resetButtonDisable = input <= 1 ? true : null
    const minusCountsButton = addingInputCount <= 1 ? true : null

    function color(num) {
        return num <= 4 ? { color: "red" } : { color: "green" }
    }
    function resetHandleSubmit() {
        setAddingInputCount(1)
        setInput(1)
    }
    const haveList = inputList.length > 0
        && <ul>{inputList.map((element, index) => {
            return <li className="li-item" style={color(element)} onClick={(e) => e.target.classList.toggle("done")} key={index}>{element}</li>
        })}</ul>
        
        
    return (
        <div className="Counter-Container">
            <input className="input-number" onChange={(e) => setInput(Number(e.target.value))} type="number" min="1"></input>
            <h3 style={color(input)}>{input}</h3>
            <button className="plus2-btn" onClick={() => setInput(prevState => prevState + 2)} disabled={plus2ButtonDisable}>+2</button>
            <button className="plus-btn" onClick={() => setInput(prevState => prevState + addingInputCount)} disabled={plusButtonDisable}>+</button>
            <button className="reset-btn" onClick={resetHandleSubmit} disabled={resetButtonDisable}>RESET</button>
            <button className="minus-btn" onClick={() => setInput(prevState => prevState - addingInputCount)} disabled={minusButtonDisable}>-</button>
            <button className="minus2-btn" onClick={() => setInput(prevState => prevState - 2)} disabled={minus2ButtonDisable}>-2</button><br />

            <h4 onChange={(e) => setInput(e.target.value)}>{addingInputCount}</h4>
            <button className="plus-btn" onClick={() => setAddingInputCount(prevState => prevState + 1)} disabled={null}>+</button>
            <button className="minus-btn" onClick={() => setAddingInputCount(prevState => prevState - 1)} disabled={minusCountsButton}>-</button><br />
            
            <button className="add" onClick={() => setInputList(prevState => prevState.concat(input))}>ADD IN LIST</button><br />
            <button className="add" onClick={() => setInputList([])}>Clear</button><br />
            {haveList}
        </div>
    )
}

export default Counter