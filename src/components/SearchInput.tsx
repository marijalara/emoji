import React from 'react';

interface SearchInputProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({inputText, setInputText}) => {
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>) => {
        var lowerCase=e.target.value.toLowerCase()
        setInputText(lowerCase)
    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
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