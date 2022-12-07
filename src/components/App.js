import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import SearchInput from "./SearchInput";
import InputList from "./InputList";

const App=() => {
    // var emoji = require('emoji.json')
    const [inputText, setInputText]=useState('')

    
    return(
        <div>
            <Header />
            <SearchInput 
                inputText={inputText} 
                setInputText={setInputText}
            />
            <InputList inputText={inputText} setInputText={setInputText}/>
        </div>
    )
}

export default App