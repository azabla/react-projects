import { useState } from "react";
import "./style.css";
import {FaStar} from "react-icons/fa";




export default function StarRating({noOfStars = 5 }){
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);
    
    function handleClick(index){
        setRate(index);
    }

    function handleMouseEnter(index){
        setHover(index);
    }

    function handleMouseLeave(){
        setHover(rate);
    }

    return (
        <div className="star-rating">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;
    
            return (
              <FaStar
                key={index}
                className={index <= (hover || rate) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
              />
            );
          })}
        </div>
      );
}