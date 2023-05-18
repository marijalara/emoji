import React, {useState} from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import InputList from './InputList';

const App: React.FC = () => {
    const [inputText, setInputText]=useState<string>('')
    return (
        <div>
            <Header />
            <SearchInput
                inputText={inputText}
                setInputText={setInputText}
            />
            <InputList 
                inputText={inputText} 
            />
        </div>
    )
}

export default App