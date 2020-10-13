import React from "react";

const Image = ({ url, title }) => {

  const updateSelcted = e => {
    console.log( e.target.src );
  }

  return(
    <li>
    <div
      onClick = {updateSelcted}
    >
      <img src={url} alt={title} />
    </div>
  </li>
  );  
}

export default Image;
