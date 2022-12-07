import React from "react";
import EmojiData from "./emoji.json";


const InputList=({inputText, setInputText}) => {
    const filteredData=EmojiData.filter((item) => {
        if(inputText==='') {
            return item
        } else {
            return item.title.toLowerCase().includes(inputText)
        }
    })
    
    return(
        <ul className="list">
            {filteredData.map((item) =>(
                <li className="item" key={item.title}>{item.symbol} {item.title}</li>
            ))}
        </ul>
    )
}

export default InputList