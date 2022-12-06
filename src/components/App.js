import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import SearchInput from "./SearchInput";
import InputList from "./InputList";

const App=() => {
    // var emoji = require('emoji.json')
    const [text, setText]=useState('')
    
    return(
        <div>
            <Header />
            <SearchInput 
                text={text} 
                setText={setText}
            />
            <InputList />
        </div>
    )
}

export default App