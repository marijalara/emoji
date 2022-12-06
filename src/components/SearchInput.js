import React from "react";

const SearchInput=({text, setText}) => {
    const handleChange=(e, ) => {
        setText(e.target.value)
    }
    const handleSubmit=(e) => {
        e.preventDefault()
    }
    return(
        <form onSubmit={handleSubmit} className="ui form">
        <div className="search-input">
            <input 
                type="text"
                value={text}
                onChange={handleChange}
            />
        </div>
        </form>
    )
}

export default SearchInput