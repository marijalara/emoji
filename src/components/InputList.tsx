import React from 'react';
import EmojiData from './emoji.json';

interface InputListProps {
    inputText: string
}

const InputList: React.FC<InputListProps> = ({inputText}) => {
    const filteredData=EmojiData.filter((item) =>{
        if(inputText==='') {
            return item
        } else {
            return item.title.toLowerCase().includes(inputText)
        }
    })
    return (
        <div className='list'>
            <br />
            {filteredData.splice(0,20).map((item) => (
                <div className='item' key={item.title}>{item.symbol} {item.title}
                <div className='info' onClick={() => {navigator.clipboard.writeText(item.symbol)}}>
                    Click to copy emoji
                </div>
                </div>
            ))}
        </div>
    )
}

export default InputList