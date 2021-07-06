import React from 'react';
import Aux from '../../hoc/Aux/Aux';

import './ScreenplayTable.css';
import StarRating from '../UI/StarRating/StarRating';

const ScreenplayTable= ({screenplays}) => {

    const renderedRows = screenplays.map((screenplay, index=0) => {
        return (
            <tr key={screenplay._id} screenplay={screenplay}>
                <td>{index}</td>
                <td>{screenplay?.title}</td>
                <td>{screenplay?.rate} ({screenplay?.votes} votes)</td>
                <td><StarRating screenplayId={screenplay._id}/></td>
            </tr>
        );
    })

    return (
        <Aux>
            {
                screenplays?.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th> #</th>
                            <th> Title</th>
                            <th> Rate</th>
                            <th> Your Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderedRows}
                    </tbody>
                </table> :
                <p> Nothing found here!</p>
            }
        </Aux>        
    )
}

export default ScreenplayTable;