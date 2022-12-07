import React from "react";
import EmojiData from "./emoji.json";

const InputList=({inputText}) => {
    
    const filteredData=EmojiData.filter((item) => {
        if(inputText==='') {
            return item
        } else {
            return item.title.toLowerCase().includes(inputText)
        }
    })
    
    return(
        <ul className="list">
            {filteredData.splice(0, 20).map((item) =>(
                <li className="item" key={item.title}>{item.symbol} {item.title}
                <div className="info" onClick={() =>{navigator.clipboard.writeText(item.symbol)}}>Click to copy emoji</div>
                </li>
            ))}
        </ul>
    )
}

export default InputList