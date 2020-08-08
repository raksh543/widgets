import React,{useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items=[
    {
        title:'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title:'How do you use React?',
        content: 'You use react by creating components.'
    }
]

const options = [
    {
        label: 'Red',
        value: 'red'
    },{
        label:'Green',
        value: 'green'
    },{
        label:'A shade of blue',
        value: 'blue'
    }
]

const App = () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    // return(
    //     <div className="ui container">
    //         {/* <Accordion items={items}/> */}
    //         {/* <Search /> */}
    //         <button onClick={()=>setShowDropdown(!showDropdown)}>Toogle dropdown</button>
    //         {showDropdown ? 
    //             <Dropdown
    //                 selected={selected}
    //                 onSelectedChange={setSelected}
    //                 options={options}
    //             /> : null
    //         }
    //     </div>
    // )

    return(
        <div>
            <Translate />
        </div>
    )
};

export default App;