import React from "react";

const Cards = (props) => {
  console.log(props);

  return (
    <>
      <div className="card">
        <div>{props.data.login}</div>
        <div>{props.data.node_id}</div>
      </div>
    </>
  );
};

export default Cards;
