import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import ScreenplayList from '../../components/ScreenplayList/ScreenplayList';
import ToggleGroup from '../../components/UI/ToggleGroup/ToggleGroup';

const Screenplay = () => {

    const [screenplays, setScreenplays] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTerm, setCurrentTerm] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [shouldResetFlag, setShouldResetFlag] = useState(true);

    useEffect(() => {
        try {
            const getCategories = async() => {
                const response = await axios.get('/categories');
                setSelectedCategoryId(response.data[0]._id);
                setCategories(response.data);
                setShouldResetFlag(true);
            }
            getCategories();
        } catch (error) {
            console.log(error);
        }
        
    }, [])

    useEffect(() => {
        getScreenplays();
    }, [currentTerm, selectedCategoryId, currentPage])

    const onTermSubmit = async (term) => {
        if(term.length < 2) {
            setShouldResetFlag(true);
        }
        setCurrentPage(1)
        setCurrentTerm(term);
        setShouldResetFlag(false);
        setScreenplays([])
    };

    const toggleCategory = (id) =>{
        setSelectedCategoryId(id);
        setShouldResetFlag(true);
        setCurrentPage(1);
    }

    const getScreenplays = async () =>{
        const response = await axios.get('/screenplays', {
            params: {
                page: currentPage,
                category: selectedCategoryId,
                search: currentTerm
            }
        });

        //If the load more is clicked merge arrays
        //Else replace with new 10 results
        if(shouldResetFlag) {
            setScreenplays(response.data);
        } else {
            setScreenplays(screenplays.concat(response.data));
        }
    }

    const loadMore = () => {
        setCurrentPage(currentPage+1);
        setShouldResetFlag(false);
    }

    return(
        <Aux>
            <SearchBar onTermSubmit={onTermSubmit}/>
            <br/>
            <ToggleGroup array={categories} toggleCategory={toggleCategory}/>
            <br/>
            <ScreenplayList screenplays={screenplays}/>
            {
                screenplays.length % 10 == 0 && screenplays.length != 0 ?
                <div style={{textAlign: "center"}}>
                    <Button buttonType="Accent" clicked={loadMore}>LoadMore</Button>
                </div> : null
            }
        </Aux>
    );
}

export default Screenplay;