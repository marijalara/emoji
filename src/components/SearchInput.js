import React from "react";

const SearchInput=({inputText, setInputText}) => {
    const handleChange=(e ) => {
        var lowerCase=e.target.value.toLowerCase()
        setInputText(lowerCase)
    }
    
    const handleSubmit=(e) => {
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className="ui form">
        <div className="search-input">
            <input 
                type="text"
                value={inputText}
                onChange={handleChange}
            />
        </div>
        </form>
    )
}

export default SearchInput