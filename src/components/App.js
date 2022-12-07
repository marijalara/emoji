import React, { useState } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import InputList from "./InputList";

const App=() => {
    const [inputText, setInputText]=useState('')
    
    return(
        <div>
            <Header />
            <SearchInput 
                inputText={inputText} 
                setInputText={setInputText}
            />
            <InputList 
                inputText={inputText} 
                setInputText={setInputText}
            />
        </div>
    )
}

export default App