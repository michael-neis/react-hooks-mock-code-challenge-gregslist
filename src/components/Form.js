import React from "react"

function Form({handleFormChange, formData, handleAddSubmit}){
    return(
            <form onSubmit={handleAddSubmit}> 
                <br/>
                    <input type="text" style={{marginRight: '40px'}} name='description' onChange={handleFormChange} placeholder='Description' value={formData.description}/>

                    <input type="text" style={{marginRight: '40px'}} name='image' onChange={handleFormChange} placeholder='Image' value={formData.image}/>

                    <input type="text" style={{marginRight: '40px'}} name='location' onChange={handleFormChange} placeholder='Location' value={formData.location}/>
                    <button type='submit'>Add</button>
            </form>
    )
}

export default Form