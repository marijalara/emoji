import React from "react";
import EmojiData from "./emoji.json";


const InputList=() => {
    return(
        <ul className="list">
            {EmojiData.map((item) =>(
                <li key={item.title}>{item.symbol} {item.title}</li>
            ))}
        </ul>
    )
}

export default InputList