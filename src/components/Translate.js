// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate =() => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input type="text" value={text} onChange= {(e)=>setText(e.target.value)}/>
                </div>
            </div>
            <div>
                <Dropdown label="Select a language" options={options} selected={language} onSelectedChange={setLanguage}/>
            </div>
            <h3 className="ui header"> Output </h3>
                <Convert language={language} text={text} />
            
        </div>
    )
};

export default Translate;