import React from "react";

const MostAsked = (props) => {
  return (
    <div className="card-box ">
      <div className="card-icon ">
        <div className="text">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MostAsked;
