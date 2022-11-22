import React from 'react'

const CreateItem = () => {
    return (
        <>
            <h2>Create Item</h2>
            <form>
                <fieldset>
                    <label htmlFor="title">Title: </label>
                    <input id="title"></input>
                    <select>
                        <option value="fruits">Fruits</option>
                    </select>
                    <input type="submit" value="SUBMIT"></input>
                    
                </fieldset>
            </form>
        </>
    )
}

export default CreateItem