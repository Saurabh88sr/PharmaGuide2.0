import React from "react";

const Card = (props) => {
  return (
    //testing added
    <div className="card-box  ">
      <div className="card-icon cardcolor ">
      <img src={props.src}  alt={props.alt} />
        	  <div className="text">
            <h4>{props.feature}</h4>
            <textarea name="faslkd" id="" cols="30" rows="10">sdkf;askdjf</textarea>

              	  </div>
  </div>
    </div>
  );
};

export default Card;
