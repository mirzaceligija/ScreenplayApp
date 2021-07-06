import React, { useState } from 'react';
import axios from '../../../axios/axios';
import { FaStar} from 'react-icons/fa';
import './StarRating.css';

const StarRating = (props) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    const rateScreenplay = async (event) => {
        setRating(event.target.value)
        console.log("rate",event.target.value);
        const response = await axios.put(`/screenplays/${props.screenplayId}`, {
            rate: rating
        });
        console.log(response);
    }

    return(
        <div className="StarRating"> 
            
            {[...Array(5)].map((star, i) => {
                const ratingValue = i+1;
                return(
                    <label key={i}>
                        <input type="radio" name="rating"
                            value={ratingValue}
                            onClick={rateScreenplay}/>
                        <FaStar className="Star"
                            color={ratingValue<= (hover || rating) ? '#fdcb6e' : '#dfe6e9'}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}/>
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;