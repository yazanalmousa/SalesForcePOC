import React from "react";

function Card(props) {
  return (
    <div className="container-search">
      <h1 className="title">{props.title}</h1>
      <a className="anker" href={props.urls} target="_blank">
        Open File
        <span className="refrences">
          <img
            src="./img/logo-salesforce.svg"
            alt="SalesForce"
            width="50px"
            height="50px"
          />
        </span>
      </a>
    </div>
  );
}

export default Card;
