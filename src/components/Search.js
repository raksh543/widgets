import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState([]);
    console.log(results)
    // console.log('I run with eevry render')

    useEffect(()=>{
        // console.log('sjhd');
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action:'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            
            setResults(data.query.search);
        }
        search();
        // if(term){
        //     search();
        // }
        
    },[term]);

    const renderedResult = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                        {/* {result.snippet} */}
                    </div>
                </div>
            </div>
        )
    });

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    )
};

export default Search;