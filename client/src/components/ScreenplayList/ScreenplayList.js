import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import ScreenplayCard from './ScreenplayCard/ScreenplayCard';

const ScreenplayList = ({screenplays}) => {

    const renderedCards = screenplays.map((screenplay) => {
        return <ScreenplayCard key={screenplay._id} screenplay={screenplay}/>
    })

    return (
        <Aux>
            {
                screenplays.length > 0 ?
                <div className="ScreenplayList"> {renderedCards} </div> :
                <p> Nothing found here!</p>
            }
        </Aux>        
    )
}

export default ScreenplayList;