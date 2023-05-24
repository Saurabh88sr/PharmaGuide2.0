import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <div className="card-box  ">
              <div className="card-icon cardcolor ">
                <img src={props.src} alt={props.alt} />
                <div className="text">
                  <h4>{props.feature}</h4>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="flip-box-back p-4">
            <h4>{props.feature}</h4>
            <p className="p-3">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
