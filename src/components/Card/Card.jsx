import React from "react";

function Card(props) {
  return (
    <div className="w-fit rounded-md shadow-md shadow-lime-200 bg-white p-3">
      {props.children}
    </div>
  );
}

export default Card;
