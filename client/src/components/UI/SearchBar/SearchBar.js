import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({onTermSubmit}) => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        if(debouncedTerm.length > 2 || debouncedTerm.length === 0)
            onTermSubmit(term);
    }, [debouncedTerm]);

    return(
        <div> 
            <input 
                className="SearchBar" 
                type="text" value={term} 
                onChange={e=> setTerm(e.target.value)}
                placeholder="Search.."></input>
        </div>
    );
}

export default SearchBar;