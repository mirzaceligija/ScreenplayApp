import React, { useState, useEffect } from 'react';
import axios from '../../axios/axios';
import Aux from '../../hoc/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import ScreenplayTable from '../../components/ScreenplayTable/ScreenplayTable';

const Rating = () => {

    const [screenplays, setScreenplays] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    useEffect(() => {
        try {
            const getCategories = async() => {
                const response = await axios.get('/categories');
                setSelectedCategoryId(response.data[0]._id);
            }
            getCategories();
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        try {
            const getScreenplays = async () => {
                const response = await axios.get('/screenplays', {
                    params: {
                        page: currentPage,
                        category: selectedCategoryId,
                    }
                });
        
                //If the load more is clicked merge arrays
                //Else replace with new 10 results
                setScreenplays(screenplays.concat(response.data));
            }
            getScreenplays();
        } catch (error) {
            console.log(error);
        }
    }, [selectedCategoryId, currentPage]);

    const loadMore = () => {
        setCurrentPage(currentPage+1);
    }

    return(
        <Aux>
            <ScreenplayTable screenplays={screenplays}/>
            {
                screenplays.length % 10 == 0 && screenplays.length != 0 ?
                <div style={{textAlign: "center"}}>
                    <Button buttonType="Accent" clicked={loadMore}>LoadMore</Button>
                </div> : null
            }
        </Aux>
    );
}

export default Rating;